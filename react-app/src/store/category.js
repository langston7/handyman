const GET_CATEGORIES = 'category/getCategories';
const DELETE_CATEGORY = 'category/deleteCategory';

const get_categories = (categories) => {
  return {
    type: GET_CATEGORIES,
    payload: categories,
  };
}
const delete_category = (category_id) => {
  return{
    type: DELETE_CATEGORY,
    payload: category_id
  }
}

export const getCategories = () => async dispatch => {
  const response = await fetch('/api/categories/');
  const data = await response.json();
  dispatch(get_categories(data.categories));
}

export const deleteCategory = (category_id) => async dispatch => {
  const response = await fetch(`/api/categorys/${category_id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  if(response.ok){
    await dispatch(delete_category(category_id))
    return null
  }
}

const categoryReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case GET_CATEGORIES:
      newState = Object.assign({}, state);
      newState = action.payload;
      return newState
    case DELETE_CATEGORY:
      newState = Object.assign({}, state);
      delete newState[action.payload];
      return newState;
    default:
      return state;
  }
}

export default categoryReducer;
