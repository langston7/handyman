import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTaskers } from "../../store/tasker";
import './myprofile.css'

function MyProfile(){
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const taskers = useSelector(state => Object.values(state.taskers));
  const thisTasker = taskers?.filter((tasker) => tasker.user_id === user?.id)[0];

  useEffect(() => {
    dispatch(getTaskers());
  },[dispatch])

  return(
    <div className="profile-container">
      <div className="profile-inner">
        <h2>Your Profile </h2>
        <div className="tasker-card">
          <div className="tasker-left">
            <img src={thisTasker?.profile_pic} alt="avatar" className="tasker-avatar"></img>
          </div>
          <div className="tasker-right">
            <div className="tasker-right-top">
              <div>{thisTasker?.user.first_name} {thisTasker?.user.last_name}</div>
              <div>Tasks Completed: {thisTasker?.tasks_completed}</div>
              <div className="tasker-bio">{thisTasker?.bio}</div>
            </div>
          </div>
        </div>
        <div>Check out what people are saying about you:</div>
        <div>
          myReviews.map()
        </div>
      </div>
    </div>
  )
}

export default MyProfile
