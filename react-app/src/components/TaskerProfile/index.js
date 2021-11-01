import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getOneTasker } from "../../store/tasker";
import { getReviews } from "../../store/review";
import './taskerprofile.css'

function TaskerProfile(){
  const dispatch = useDispatch();
  const {tasker_id} = useParams();
  const user = useSelector(state => state.session.user);
  const tasker = useSelector(state => state.taskers);
  const reviews = useSelector(state => Object.values(state.reviews));
  const thisReviews = reviews.filter((review) => review.tasker_id === parseInt(tasker_id));

  let averageRating = 0;
  if(thisReviews[0]){
    for(let review of thisReviews){
      averageRating+=review.rating;
    }
    averageRating = (averageRating/thisReviews.length).toFixed(2);
  }
  useEffect(()=> {
    dispatch(getOneTasker(tasker_id))
    dispatch(getReviews())
  }, [dispatch, tasker_id])

  return(
    <div className="profile-body">
      <div className={"tasker-card"}>
        <div className="tasker-left">
          <img src={tasker?.profile_pic} alt="avatar" className="tasker-avatar"></img>
        </div>
        <div className="tasker-right">
          <div className="tasker-right-top">
            <div className="tasker-card-item">{tasker?.user?.first_name} {tasker?.user?.last_name}</div>
            <div className="tasker-card-item">Tasks Completed: {tasker?.tasks_completed}</div>
            <div className="tasker-card-item">{tasker?.bio}</div>
            <div className="tasker-card-item">Average Rating: {averageRating}/5</div>
          </div>
        </div>
      </div>
      <div className="reviews-body">
        <h2>Check out what people are saying about this person:</h2>
        {thisReviews?.map((review) =>
        <div key={review.id} className="review-card">
          <div className="review-headers">
            <h3>{review.user_FN} says:</h3>
            <h3>{review.rating} / 5</h3>
          </div>
          <div className="review-card-content">{review.content}</div>
          <NavLink
            to={{
              pathname:'/edit-review',
              state:{ review_id:review.id, review_content:review.content, review_rating:review.rating, tasker_id:tasker.id }
            }}
            className={`profile-button ${user.id === review.user_id ? null : "hidden"}`}
          >Edit your Review
          </NavLink>
        </div>
        )}
      </div>
    </div>
  )
}

export default TaskerProfile
