const GET_TASKERS = 'tasker/getTaskers';

const get_taskers = (taskers) => {
  return {
    type: GET_TASKERS,
    payload: taskers,
  };
}

export const getOneTasker = (id) => async dispatch => {
  const response = await fetch(`/api/taskers/${id}`);
  const data = await response.json();
  dispatch(get_taskers(data));
}

export const getTaskerByUserID = (user_id) => async dispatch => {
  const response = await fetch(`/api/taskers/byuser/${user_id}`);
  if(response.ok){
    const data = await response.json();
    dispatch(get_taskers(data));
    return data;
  }
}

export const getTaskers = () => async dispatch => {
  const response = await fetch('/api/taskers/');
  const data = await response.json();
  dispatch(get_taskers(data.taskers));
}

const taskerReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case GET_TASKERS:
      newState = Object.assign({}, state);
      newState = action.payload;
      return newState;
    default:
      return state;
  }
}

export default taskerReducer;
