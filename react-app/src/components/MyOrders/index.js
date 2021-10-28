import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import { deleteOrder, getOrders } from '../../store/order';
import './myorders.css'

function MyOrders(){
  const dispatch = useDispatch();
  const history = useHistory();
  const orders = useSelector(state => Object.values(state.orders));


  useEffect(() => {
    dispatch(getOrders())
  }, [dispatch])

  const cancelTask = (e) => {
    e.preventDefault()
    dispatch(deleteOrder(e.target.value));
  }

  return(
    <div className="body-container">
      <h2>Tasks in progress:</h2>
      {orders.map((order) =>
        <div className="order-card">
          <div className="order-component">
            You have an order placed with {order.tasker_FN} {order.tasker_LN}
            at your location in {order.location} on {order.date}.  It should take approximately
            {order.duration === "small" ? ' 1 ' :
            order.duration === "medium" ? ' 2-3 ' : ' 4-5 '}
            hours to complete. {order.tasker_FN} will arrive onsite
            at
            {order.time === "morning" ? ' 8:00 A.M. ' :
            order.time === "noon" ? ' 1:00 P.M. ' : ' 6:00 P.M. '
            }.</div>
          <div className="order-component">Your message to {order.tasker_FN}: {order.details}</div>
          <div className="order-component">If this task needs to be canceled for any reason, Click Cancel.</div>
          <div className="order-component">If this task has been completed, feel free to a leave a review.</div>
          <button className="step-button" value={order.id} onClick={cancelTask}>Cancel</button>
          <NavLink to={{
            pathname:"/review",
            state: {tasker_id:order.tasker_id, user_id:order.user_id}
          }} >Leave Review</NavLink>
        </div>
      )}
    </div>
  )
}


export default MyOrders;
