import './thirdpage.css'

function ThirdPage({formData, currentStep, handleSubmit}){

  if (currentStep !== 3){
    return null
  }

  return(
    <div>
      <h2>Ready to Submit your order?</h2>
      <button onClick={handleSubmit} className="submit-button">Submit order</button>
    </div>
  )
}

export default ThirdPage
