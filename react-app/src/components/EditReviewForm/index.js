import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useHistory } from "react-router"
import { patchReview } from "../../store/review";

function EditReviewForm(){
  const history = useHistory();
  const dispatch = useDispatch();
  const {review_id, review_rating, review_content, tasker_id} = useLocation().state;
  const [rating, setRating] = useState(review_rating);
  const [content, setContent] = useState(review_content);

  const updateRating = e => {
    setRating(e.target.value);
  }

  const updateContent = e => {
    setContent(e.target.value);
  }

  const handleSubmit = async e => {
    e.preventDefault();

    await dispatch(patchReview(review_id, rating, content));
    history.push(`/tasker/${tasker_id}`)
  }


  return(
    <div className="body-container">
      <div className="review-form">
        <div className="review-label">Rate your handyman:</div>
        <select onChange={updateRating} value={rating}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <div className="review-label">Tell us how they did:</div>
        <textarea
          type="textfield"
          className="review-content"
          value={content}
          onChange={updateContent}
        >
        </textarea>
        <div className="review-button-container">
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default EditReviewForm
