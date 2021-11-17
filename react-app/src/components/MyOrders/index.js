import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { deleteOrder, getOrders } from '../../store/order';
import EditOrderForm from './EditOrderForm';
import './myorders.css'

function MyOrders(){
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const orders = useSelector(state => Object.values(state.orders));
  const myOrders = orders.filter((order) => order.user_id === user.id);
  const inProgressOrders = myOrders.filter((order) => !(order.is_complete));
  const completedOrders = myOrders.filter((order) => order.is_complete);

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch])

  const cancelTask = async (e) => {
    e.preventDefault()
    await dispatch(deleteOrder(e.target.value));
    await dispatch(getOrders());
  }

  return(
    <div className="body-container">
      <h1>Welcome, {user.first_name}</h1>
      <h2>Orders in progress:</h2>
      <div>{myOrders[0] === undefined ? "You have no orders!" : null }</div>
      {inProgressOrders?.map((order) =>
        <div key={order.id} className="order-card">
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
          <div className="order-component">
            Your message to {order.tasker_FN}: {order.details}
          </div>

          <EditOrderForm order={order}/>


          <div className="order-component">If this task needs to be canceled for any reason, Click Cancel.</div>
          <div className="order-component">If this task has been completed, feel free to a leave a review.</div>
          <button className={`step-button`} value={order.id} onClick={cancelTask}>Cancel</button>
          <NavLink to={{
            pathname:"/review",
            state: {tasker_id:order.tasker_id, user_id:order.user_id, order_id:order.id}
          }}
            className={`review-button`}
          >Leave Review</NavLink>
        </div>
      )}
      <h2>Completed Orders:</h2>
      {completedOrders?.map((order) =>
        <div key={order.id} className="order-card">
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
          <div className="order-component">
            Your message to {order.tasker_FN}: {order.details}
          </div>
        </div>
      )}
    </div>
  )
}


export default MyOrders;
