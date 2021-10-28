import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTaskers } from '../../../../store/tasker';
import './secondpage.css';

function SecondPage({category, location, date, time, handleChange, currentStep}){
  const dispatch = useDispatch();
  const [currTasker, setCurrTasker] = useState(0);
  const taskers = useSelector(state => Object.values(state.taskers));
  const taskersByState = taskers?.filter((tasker) => tasker.state === location);

  const taskersByAv = taskersByState.filter(tasker => {
    for(const order of Object.values(tasker.my_orders)){
      if (order.date === date && order.time === time){
        return false
      }
    }
    return true
  });

  useEffect(()=> {
    dispatch(getTaskers())
  }, [dispatch])

  if (currentStep !== 2){
    return null
  }

  const updateCurrTasker = (e) => {
    setCurrTasker(e.target.value);
  }

  const handleSelect = (e) => {
    handleChange(e);
    updateCurrTasker(e)
  }

  return (
    <div className="sp-container">
      <div className="sp-left">
        <div>Select a day</div>
        <input type="date" name="date" onChange={handleChange}></input>
        <div>Choose a Timeslot</div>
        <select name="time" onChange={handleChange}>
          <option disabled selected value> -Select a time- </option>
          <option value={'morning'}>8:00AM - 12:00PM</option>
          <option value={'noon'}>1:00PM - 5:00PM</option>
          <option value={'evening'}>6:00PM - 10:00PM</option>
        </select>
      </div>
      <div className="sp-right">
        {taskersByAv?.map((tasker) =>
          <div className={"tasker-card " + (parseInt(currTasker) === tasker.id ? "highlight" : "none")}>
            <div className="tasker-left">
              <img src={tasker.profile_pic} alt="avatar" className="tasker-avatar"></img>
              <button
                className="form-button"
                name="tasker_id"
                value={tasker.id}
                onClick={handleSelect}
              >Select {'&'} Continue</button>
            </div>
            <div className="tasker-right">
              <div className="tasker-right-top">
                <div>{tasker.user.first_name} {tasker.user.last_name}</div>
                <div>Tasks Completed: {tasker.tasks_completed}</div>
                <div>{tasker.bio}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )

}

export default SecondPage
