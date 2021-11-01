import { useState } from "react";
import { useHistory, useLocation } from "react-router";
import './reviewform.css';

function ReviewForm(){
  const history = useHistory();
  const {tasker_id, user_id} = useLocation().state;
  const [rating, setRating] = useState(1);
  const [content, setContent] = useState('');

  const updateRating = e => {
    setRating(e.target.value);
  }

  const updateContent = e => {
    setContent(e.target.value);
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/reviews/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        rating: rating,
        content: content,
        user_id: user_id,
        tasker_id: tasker_id
      })
    });
    await response.json();
    history.push(`/`);
  }


  return(
    <div className="body-container">
      <form className="review-form" onSubmit={handleSubmit}>
        <div className="review-label">Rate your handyman:</div>
        <select onChange={updateRating}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <div className="review-label">Tell us how they did:</div>
        <textarea
          className="review-content"
          value={content}
          onChange={updateContent}
          required
        >
        </textarea>
        <div className="review-button-container">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}


export default ReviewForm
