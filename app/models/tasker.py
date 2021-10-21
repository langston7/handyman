from .db import db

class Tasker(db.Model):
  __tablename__ = 'taskers'

  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
  category_id = db.Column(db.Integer, db.ForeignKey("categories.id"))
  state = db.Column(db.String(20), nullable=False)
  tasks_completed = db.Column(db.Integer, nullable=False)
  availability_start = db.Column(db.Integer, nullable=False)
  availability_end = db.Column(db.Integer, nullable=False)

  orders = db.relationship("Order", back_populates="tasker")
  reviews = db.relationship("Review", back_populates="tasker")
  category = db.relationship( "Category", back_populates="taskers")

  def to_dict(self):
    return {
      'id': self.id,
      'user_id': self.user_id,
      'state': self.state,
      'tasks_completed': self.tasks_completed,
      'availability_start': self.availability_start,
      'availability_end': self.availability_end,
      'orders': self.orders,
      'reviews': self.reviews,
      'categories': self.categories,
    }
