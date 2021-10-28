import { useState } from "react";
import { useHistory, useLocation } from "react-router";
import './reviewform.css';

function ReviewForm(){
  const history = useHistory();
  const {tasker_id, user_id} = useLocation().state;
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState('');

  const updateRating = e => {
    setRating(e.target.value);
  }

  const updateContent = e => {
    setContent(e.target.value);
  }

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(rating)
    console.log(content);
    console.log(user_id)
    console.log(tasker_id)
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
    const order = await response.json();
    history.push(`/`);
  }

  // const options = []
  // for(let i in 5){
  //   options.push(<option value={i} onChange={updateRating}>{i}</option>)
  // }

  return(
    <div className="body-container">
      <div>Rate your handyman:</div>
      <select onChange={updateRating}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <div>Tell us how they did:</div>
      <input
        type="textfield"
        className="review-content"
        value={content}
        onChange={updateContent}
      >
      </input>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )

}


export default ReviewForm
