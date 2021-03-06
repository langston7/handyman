from .db import db
from .order import Order

TaskersToCategories = db.Table(
  'taskers_to_categories',
  db.Column("tasker_id", db.Integer, db.ForeignKey("taskers.id"), primary_key=True),
  db.Column("category_id", db.Integer, db.ForeignKey("categories.id"), primary_key=True))

class Tasker(db.Model):
  __tablename__ = 'taskers'

  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
  state = db.Column(db.String(20), nullable=False)
  bio = db.Column(db.Text, nullable=False)
  profile_pic = db.Column(db.String(200), nullable=False)
  tasks_completed = db.Column(db.Integer, nullable=False)
  availability_start = db.Column(db.Integer, nullable=False)
  availability_end = db.Column(db.Integer, nullable=False)

  initialized_categories = db.relationship("Category", back_populates="tasker")
  orders = db.relationship("Order", back_populates="tasker")
  reviews = db.relationship("Review", back_populates="tasker")
  user = db.relationship("User", back_populates="tasker")

  categories = db.relationship(
    "Category",
    secondary=TaskersToCategories,
    back_populates="taskers")

  def my_orders(self):
    orders = Order.query.filter(Order.tasker_id == self.id).all()
    orderDict = {}
    for order in orders:
      orderDict[order.id] = order.to_dict()
    return orderDict

  def to_dict(self):
    userDict = self.user.to_dict()
    return {
      'id': self.id,
      'user_id': self.user_id,
      'state': self.state,
      'bio': self.bio,
      'profile_pic': self.profile_pic,
      'tasks_completed': self.tasks_completed,
      'availability_start': self.availability_start,
      'availability_end': self.availability_end,
      'user': userDict,
      'my_orders': self.my_orders(),
    }

class Category(db.Model):
  __tablename__ = 'categories'

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(40), nullable=False)
  img_src = db.Column(db.String(200), nullable=False)
  tasker_id = db.Column(db.Integer, db.ForeignKey("taskers.id"))

  orders = db.relationship("Order", back_populates="category")
  tasker = db.relationship("Tasker", back_populates="initialized_categories")
  taskers = db.relationship(
    "Tasker",
    secondary=TaskersToCategories,
    back_populates="categories")

  def to_dict(self):
    return {
      'id': self.id,
      'name': self.name,
      'img_src': self.img_src,
      'tasker_id': self.tasker_id
    }
