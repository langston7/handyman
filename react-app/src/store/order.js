const GET_ORDERS = 'order/getOrders';
const DELETE_ORDER = 'order/deleteOrder';
const PATCH_ORDER = 'order/patchOrder';

const get_orders = (orders) => {
  return {
    type: GET_ORDERS,
    payload: orders,
  };
}

const delete_order = (order_id) => {
  return{
    type: DELETE_ORDER,
    payload: order_id
  }
}

// const patch_order = (order) => {
//   return{
//     type: PATCH_ORDER,
//     payload: order,
//   }
// }

export const getOrders = () => async dispatch => {
  const response = await fetch('/api/orders/');
  const data = await response.json();
  dispatch(get_orders(data.orders));
}

export const deleteOrder = (order_id) => async dispatch => {
  const response = await fetch(`/api/orders/${order_id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  if(response.ok){
    await dispatch(delete_order(order_id))
    return null
  }
}

export const patchOrder = (order_id, details) => async dispatch => {
  const response = await fetch(`/api/orders/${order_id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      details: details
    })
  });
  // const updatedOrder = await response.json();
  // if(response.ok){ await dispatch(patch_order(updatedOrder))}
  if(response.ok){ await dispatch(getOrders())}
  return response;
}

const orderReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case GET_ORDERS:
      newState = Object.assign({}, state);
      newState = action.payload;
      return newState;
    case DELETE_ORDER:
      newState = Object.assign({}, state);
      delete newState[action.payload];
      return newState;
    case PATCH_ORDER:
      newState = Object.assign({}, state);
      newState[(action.payload.id)-1] = action.payload;
      return newState;
    default:
      return state;
  }
}

export default orderReducer;
