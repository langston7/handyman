const GET_REVIEWS = 'review/getReviews';
const DELETE_REVIEW = 'review/deleteReview';
const PATCH_REVIEW = 'review/patchReview';

const get_reviews = (reviews) => {
  return {
    type: GET_REVIEWS,
    payload: reviews,
  };
}

const delete_review = (review_id) => {
  return{
    type: DELETE_REVIEW,
    payload: review_id
  }
}

export const getReviews = () => async dispatch => {
  const response = await fetch('/api/reviews/');
  const data = await response.json();
  dispatch(get_reviews(data.reviews));
}

export const deleteReview = (review_id) => async dispatch => {
  const response = await fetch(`/api/reviews/${review_id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  if(response.ok){
    await dispatch(delete_review(review_id))
    return null
  }
}

export const patchReview = (review_id, rating, content) => async dispatch => {
  const response = await fetch(`/api/reviews/${review_id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      rating: rating,
      content: content
    })
  });
  if(response.ok){ await dispatch(getReviews())}
  return response;
}

const reviewReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case GET_REVIEWS:
      newState = Object.assign({}, state);
      newState = action.payload;
      return newState;
    case DELETE_REVIEW:
      newState = Object.assign({}, state);
      delete newState[action.payload];
      return newState;
    case PATCH_REVIEW:
      newState = Object.assign({}, state);
      newState[(action.payload.id)-1] = action.payload;
      return newState;
    default:
      return state;
  }
}

export default reviewReducer;
