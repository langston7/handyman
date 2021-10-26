function FirstPage({category, handleChange, currentStep}){
  if (currentStep !== 1){
    return null
  }
  return(
    <div className="body-container">
      <div>
        {category?.name}
      </div>
      <div>
        <div>YOUR TASK LOCATION</div>
        <input
          name="location"
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <div>TASK OPTIONS</div>
        <input type="radio" name="duration" value="small" onChange={handleChange}></input>
        <label>Small - Est. 1hr</label>
        <input type="radio" name="duration" value="medium" onChange={handleChange}></input>
        <label>Medium - Est. 2-3 hrs</label>
        <input type="radio" name="duration" value="large" onChange={handleChange}></input>
        <label>Large - Est. 4+ hrs</label>
      </div>
      <div>
        <div>TELL US THE DETAILS OF YOUR TASK</div>
        <input name="details" type="textfield" placeholder="What do you need done" onChange={handleChange}></input>
      </div>
    </div>

  )
}

export default FirstPage
