import './firstpage.css';

function FirstPage({category, location, duration, details, handleChange, currentStep}){

  const states=['Alabama','Alaska','Arizona','Arkansas','California','Colorado',
    'Connecticut','Delaware', 'Florida','Georgia', 'Hawaii','Idaho',
    'Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine',
    'Maryland','Massachusetts','Michigan','Minnesota', 'Mississippi','Missouri',
    'Montana','Nebraska','Nevada','New Hampshire', 'New Jersey','New Mexico',
    'New York','North Carolina','North Dakota', 'Ohio','Oklahoma','Oregon',
    'Pennsylvania', 'Rhode Island','South Carolina','South Dakota','Tennessee',
    'Texas','Utah','Vermont','Virgin Island','Virginia','Washington',
    'West Virginia','Wisconsin','Wyoming'
  ]
  if (currentStep !== 1){
    return null
  }
  return(
    <div className="preform-container">
      <div className="form-inner">
        <h2 className="fp-category">
          {category?.name}
        </h2>
        <div className="fp-input-block">
          <div>YOUR TASK LOCATION</div>
          <select
            name="location"
            onChange={handleChange}
            value={location}
          >
            <option disabled selected value> -Select your State- </option>
            {states.map((state) =>
              <option key={state} value={state}>{state}</option>
            )}
          </select>
        </div>
        <div className="fp-input-block">
          <div>TASK OPTIONS</div>
          <input type="radio" name="duration" value="small" onChange={handleChange} checked={duration === "small"}></input>
          <label>Small - Est. 1hr</label>
          <input type="radio" name="duration" value="medium" onChange={handleChange} checked={duration === "medium"}></input>
          <label>Medium - Est. 2-3 hrs</label>
          <input type="radio" name="duration" value="large" onChange={handleChange} checked={duration === "large"}></input>
          <label>Large - Est. 4+ hrs</label>
        </div>
        <div className="fp-input-block">
          <div>TELL US THE DETAILS OF YOUR TASK</div>
          <textarea
            maxLength='200'
            name="details"
            type="textfield"
            placeholder="What do you need done"
            onChange={handleChange}
            className="fp-details-input"
            value={details}
          ></textarea>
        </div>
      </div>
    </div>
  )
}

export default FirstPage
