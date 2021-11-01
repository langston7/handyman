import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTaskers } from '../../../../store/tasker';
import './secondpage.css';

function SecondPage({category, location, date, time, handleChange, currentStep}){
  const dispatch = useDispatch();
  const currentDate = new Date();
  const dd = currentDate.getDate();
  const yyyy = currentDate.getFullYear();
  const mm = currentDate.getMonth()+1;
  const today = yyyy + '-' + mm + '-' + dd;
  const [currTasker, setCurrTasker] = useState(null);
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

  const updateCurrTasker = (e) => {
    setCurrTasker(e.target.value);
  }

  const handleSelect = (e) => {
    handleChange(e);
    updateCurrTasker(e);
  }

  const handleDateAndTime = (e) => {
    setCurrTasker(null);
    handleChange(e);
  }

  if (currentStep !== 2){
    return null
  }

  return (
    <div className="sp-container">
      <div className="sp-left">
      <h2>Select a date and time:</h2>
        <div className="sp-left-card">
          <div>Select a day</div>
          <input
            type="date"
            name="date"
            onChange={handleDateAndTime}
            value={date}
            min={today}
          ></input>
          <div>Choose a Timeslot</div>
          <select name="time" onChange={handleDateAndTime} value={time}>
            <option disabled selected value> -Select a time- </option>
            <option value={'morning'}>8:00AM - 12:00PM</option>
            <option value={'noon'}>1:00PM - 5:00PM</option>
            <option value={'evening'}>6:00PM - 10:00PM</option>
          </select>
        </div>
      </div>
      <div className="sp-right">
        <h2>Available Taskers in your State:</h2>
        {taskersByAv?.map((tasker) =>
          <div key={tasker.id} className={"tasker-card " + (parseInt(currTasker) === tasker.id ? "highlight" : "none")}>
            <div className="tasker-left">
              <img src={tasker.profile_pic} alt="avatar" className="tasker-avatar"></img>
              <button
                className="form-button"
                name="tasker_id"
                value={tasker.id}
                onClick={handleSelect}
              >Select Tasker</button>
              <a
                className="profile-button"
                href={`tasker/${tasker.id}`}
                target="_blank"
                rel="noreferrer"
              >View Profile
              </a>
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
