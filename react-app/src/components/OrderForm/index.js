import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from 'react-router-dom';
import "./orderform.css";
import FirstPage from './SubPages/FirstPage';
import SecondPage from "./SubPages/SecondPage";
import ThirdPage from "./SubPages/ThirdPage";

function OrderForm(){
  const categories = useLocation().state
  const history = useHistory();
  const params = new URLSearchParams(useLocation().search)
  const categoryName = params.get('category');
  const category = categories.filter((category) => category.name === categoryName)[0]
  const user = useSelector(state => state.session.user);
  const [formData, setFormData] = useState({ category_id: category.id })
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const prevStep = e => {
    e.preventDefault()
    if (currentStep > 1) {
      setCurrentStep(prevStep => prevStep - 1)
    }
  }

  const nextStep = e => {
    e.preventDefault()
    if (currentStep < totalSteps) {
      setCurrentStep(prevStep => prevStep + 1)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === "tasker_id"){ e.preventDefault() }
    const oldState = { ...formData }
    setFormData({
      ...oldState,
      [name]: value
    })
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
    <div>
      <form onSubmit={handleSubmit}>
        <FirstPage
          category={category}
          handleChange={handleChange}
          currentStep={currentStep}
        />
        <SecondPage
          category={category}
          handleChange={handleChange}
          currentStep={currentStep}
        />
        <ThirdPage
          formData={formData}
          currentStep={currentStep}
          handleSubmit={handleSubmit}
        />
      </form>
      <button className="step-button" onClick={nextStep}>Next</button>
      <button className="step-button" onClick={prevStep}>Previous</button>
    </div>
  )
}

export default OrderForm
