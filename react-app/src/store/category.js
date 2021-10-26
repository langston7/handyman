const GET_CATEGORIES = 'category/getCategories';

const get_categories = (categories) => {
  return {
    type: GET_CATEGORIES,
    payload: categories,
  };
}

export const getCategories = () => async dispatch => {
  const response = await fetch('/api/categories/');
  const data = await response.json();
  dispatch(get_categories(data.categories));
}

const categoryReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case GET_CATEGORIES:
      newState = Object.assign({}, state);
      newState = action.payload;
      return newState
    default:
      return state;
  }
}

export default categoryReducer;
