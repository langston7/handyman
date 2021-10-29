from .db import db

class Order(db.Model):
  __tablename__ = "orders"

  id = db.Column(db.Integer, primary_key=True)
  location = db.Column(db.String(50), nullable=False)
  date = db.Column(db.String(50), nullable=False)
  time = db.Column(db.String(20), nullable=False)
  duration = db.Column(db.String(10), nullable=False)
  details = db.Column(db.Text, nullable=False)
  is_complete = db.Column(db.Boolean, nullable=False)
  tasker_id = db.Column(db.Integer, db.ForeignKey("taskers.id"))
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
  category_id = db.Column(db.Integer, db.ForeignKey("categories.id"))

  tasker = db.relationship("Tasker", back_populates="orders")
  user = db.relationship("User", back_populates="orders")
  category = db.relationship("Category", back_populates="orders")

  def to_dict(self):
    return {
      'id': self.id,
      'location': self.location,
      'date': self.date,
      'time': self.time,
      'duration': self.duration,
      'details': self.details,
      'is_complete': self.is_complete,
      'tasker_id': self.tasker_id,
      'user_id': self.user_id,
      'category_id': self.category_id,
      'category': self.category.name,
      'tasker_FN': self.tasker.user.first_name,
      'tasker_LN': self.tasker.user.last_name,
      'user_FN': self.user.first_name,
      'user_LN': self.user.last_name
    }
