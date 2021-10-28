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
  //const categories = useLocation().state
  const history = useHistory();
  const params = new URLSearchParams(useLocation().search)
  const categoryName = params.get('category');
  const category = categories.filter((category) => category.name === categoryName)[0]
  const user = useSelector(state => state.session.user);
  const [formData, setFormData] = useState({})
  const [currentStep, setCurrentStep] = useState(1);
  //const [disabled, setDisabled] = useState(true);
  const totalSteps = 3;


  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch])

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
    if(!formData.location || !formData.duration || !formData.details){
      return
    } else {
      if (currentStep < totalSteps) {
        setCurrentStep(prevStep => prevStep + 1)
      }
    }
  }

  const handleChange = (e) => {
    initializeFormData();
    const { name, value } = e.target
    if (name === "tasker_id"){ e.preventDefault() }
    const oldState = { ...formData }
    setFormData({
      ...oldState,
      [name]: value
    })
    console.log(formData);
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
    const order = await response.json();
    history.push(`/`);
  }

  return(
    <div className="body-container">
      <form onSubmit={handleSubmit} autoComplete="off">
        <FirstPage
          category={category}
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
        <button className='step-button' onClick={nextStep}>Next</button>
        <button className="step-button" onClick={prevStep}>Previous</button>
      </div>
    </div>
  )
}

export default OrderForm
