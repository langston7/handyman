import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getTaskers} from '../../../../store/tasker';
import './secondpage.css';

function SecondPage({category, handleChange, currentStep}){
  const taskers = useSelector(state => Object.values(state.taskers));
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getTaskers())
  }, [dispatch])

  if (currentStep !== 2){
    return null
  }

  return (
    <div className="sp-container">
      <div className="sp-left">
        <div>Choose a Time</div>
      </div>
      <div className="sp-right">
        {taskers.map((tasker) =>
          <div className="tasker-card">
            <div className="tasker-left">
              <img src={tasker.profile_pic} alt="avatar" className="tasker-avatar"></img>
              <button
                className="form-button"
                name="tasker_id"
                value={tasker.id}
                onClick={handleChange}
              >Select {'&'} Continue</button>
            </div>
            <div className="tasker-right">
              <div className="tasker-right-top">
                <div>{tasker.user.first_name}</div>
                <div>{tasker.user.last_name}</div>
                <div>{tasker.tasks_completed}</div>
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
