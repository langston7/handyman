function ThirdPage({formData, currentStep, handleSubmit}){

  if (currentStep !== 3){
    return null
  }

  return(
    <div>
      <div>Ready to Submit order?</div>
      <button onClick={handleSubmit}>Submit order</button>
    </div>
  )
}

export default ThirdPage
