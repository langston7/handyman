import './firstpage.css';

function FirstPage({category, handleChange, currentStep}){

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
    <div className="form-container">
      <div class-Name="form-inner">
        <h2 className="fp-category">
          {category?.name}
        </h2>
        <div>
          <div>YOUR TASK LOCATION</div>
          <select
            name="location"
            onChange={handleChange}
          >
            <option disabled selected value> -Select your State- </option>
            {states.map((state) =>
              <option value={state}>{state}</option>
            )}
          </select>
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
          <input
            maxLength='20'
            name="details"
            type="textfield"
            placeholder="What do you need done"
            onChange={handleChange}
            className="fp-details-input"
          ></input>
        </div>
      </div>
    </div>
  )
}

export default FirstPage
