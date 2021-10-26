import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { deleteOrder, getOrders } from '../../store/order';
import './myorders.css'

function MyOrders(){
  const dispatch = useDispatch();
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
          <div className="order-component">{order.location}</div>
          <div className="order-component">{order.duration}</div>
          <div className="order-component">{order.details}</div>
          <div className="order-component">{order.tasker_FN}</div>
          <button value={order.id} onClick={cancelTask}>Cancel</button>
          <button>Leave Review</button>
        </div>
      )}
    </div>
  )
}


export default MyOrders;
