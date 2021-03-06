from flask import Blueprint, request
from flask_login import login_required
from app.forms.order_form import OrderForm
from app.forms.edit_order_form import EditOrderForm
from app.models import Order, db

order_routes = Blueprint('orders', __name__)


@order_routes.route('/')
def orders():
  orders = Order.query.order_by(Order.id).all()
  ordersDict = {"orders" : [order.to_dict() for order in orders]}
  return ordersDict

@order_routes.route('/myOrders')
def myOrders():
  orders = Order.query.all()
  ordersDict = {"orders" : [order.to_dict() for order in orders]}
  return ordersDict

@order_routes.route('/', methods=['POST'])
@login_required
def post_order():
  form = OrderForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    order = Order(
      category_id = (form.data['category_id']),
      date = (form.data['date']),
      time = (form.data['time']),
      is_complete = (form.data['is_complete']),
      location = (form.data['location']),
      duration = (form.data['duration']),
      details = (form.data['details']),
      user_id = (form.data['user_id']),
      tasker_id = (form.data['tasker_id'])
    )
    db.session.add(order)
    db.session.commit()
    return order.to_dict()
  else:
    return {'error': 'Form did not validate'}, 401


@order_routes.route('/<int:id>', methods=['PATCH'])
@login_required
def put_order(id):
  order = Order.query.get(id)
  form = EditOrderForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    order.details = form.data['details']
    db.session.commit()
    return order.to_dict()
  else:
    return {'error': 'Form did not validate'}, 401


@order_routes.route('/<int:id>/complete', methods=['PATCH'])
@login_required
def mark_order_as_complete(id):
  order = Order.query.get(id)
  order.is_complete = True
  db.session.commit()
  return order.to_dict()


@order_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_order(id):
  order = Order.query.get(id)
  db.session.delete(order)
  db.session.commit()
  return {'message': 'Order canceled.'}
