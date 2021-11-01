import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../store/category";
import { useHistory, useLocation } from 'react-router-dom';
import "./orderform.css";
import FirstPage from './SubPages/FirstPage';
import SecondPage from "./SubPages/SecondPage";
import ThirdPage from "./SubPages/ThirdPage";

function OrderForm(){
  const dispatch = useDispatch();
  const categories = useSelector(state => Object.values(state.categories));
  const history = useHistory();
  const params = new URLSearchParams(useLocation().search)
  const categoryName = params.get('category');
  if(!categoryName){ history.push('/booking') };
  const found = categories.some(el => el.name === categoryName)
  const category = categories?.filter((category) => category.name === categoryName)[0]
  const user = useSelector(state => state.session.user);
  const [formData, setFormData] = useState({})
  const [currentStep, setCurrentStep] = useState(1);
  const [disabled, setDisabled] = useState(true);
  const totalSteps = 3;



  useEffect(() => {
    dispatch(getCategories());
    const checkDisable = () => {
      switch(currentStep){
        case 1:
          if(formData.location && formData.duration && formData.details && formData.details !== ''){
            setDisabled(false);
          } else { setDisabled(true) };
          break;
        case 2:
          if(formData.date && formData.time && formData.tasker_id){
            setDisabled(false);
          } else { setDisabled(true) };
          break;
        default:
          return
      }
    }
    checkDisable();
  }, [found, dispatch, currentStep, formData.location, formData.duration, formData.details, formData.date, formData.time, formData.tasker_id])

  const initializeFormData = () => {
    formData.category_id = category.id;
  }

  const prevStep = e => {
    e.preventDefault()
    if (currentStep > 1) {
      setCurrentStep(prevStep => prevStep - 1)
    }
  }

  const nextStep = e => {
    e.preventDefault()
    switch(currentStep){
      case 1:
        if(!formData.location || !formData.duration || !formData.details){
          return
        } else {
          if (currentStep < totalSteps) {
            setCurrentStep(prevStep => prevStep + 1)
          }
        }
        break;
      case 2:
        if(!formData.date || !formData.time || !formData.tasker_id){
          return
        } else {
          if (currentStep < totalSteps) {
            setCurrentStep(prevStep => prevStep + 1)
          }
        }
        break;
      default:
        return
    }

  }

  const handleChange = (e) => {
    initializeFormData();
    const { name, value } = e.target
    if (name === "tasker_id"){ e.preventDefault() }
    const oldState = { ...formData }
    if (name === 'date' || name === 'time'){
      oldState.tasker_id = null;
    }
    setFormData({
      ...oldState,
      [name]: value
    });
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/orders/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        category_id: formData.category_id,
        date: formData.date,
        time: formData.time,
        is_complete: false,
        location: formData.location,
        duration: formData.duration,
        details: formData.details,
        user_id: user.id,
        tasker_id: formData.tasker_id,
      })
    });
    await response.json();
    history.push(`/user/orders`);
  }

  if(!found){
    return(
      <div className="body-container">
        <div className="form-container">
          <div className="form-inner">

          </div>
        </div>
      </div>
    )
  }else {
  return(
    <div className="body-container">
      <form onSubmit={handleSubmit} autoComplete="off">
        <FirstPage
          category={category}
          location={formData.location}
          duration={formData.duration}
          details={formData.details}
          handleChange={handleChange}
          currentStep={currentStep}
        />
        <SecondPage
          category={category}
          date={formData.date}
          time={formData.time}
          location={formData.location}
          handleChange={handleChange}
          currentStep={currentStep}
        />
        <ThirdPage
          formData={formData}
          currentStep={currentStep}
          handleSubmit={handleSubmit}
        />
      </form>
      <div className="step-button-container">
        <button className={`step-button ${currentStep===1 ? "disabled" : null}`} onClick={prevStep}>Previous</button>
        <button className={`step-button ${disabled ? "disabled" : null} ${currentStep===3 ? "disabled" : null}`} onClick={nextStep}>Next</button>
      </div>
    </div>
  )
}}

export default OrderForm
