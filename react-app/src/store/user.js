const GET_USERS = 'user/getUsers';

const get_users = (users) => {
  return {
    type: GET_USERS,
    payload: users,
  };
}

export const getUsers = () => async dispatch => {
  const response = await fetch('/api/users/');
  const data = await response.json();
  dispatch(get_users(data.users));
}

const userReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case GET_USERS:
      newState = Object.assign({}, state);
      newState = action.payload;
      return newState
    default:
      return state;
  }
}

export default userReducer;
