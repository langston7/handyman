from .db import db

class Order(db.Model):
  __tablename__ = "orders"

  id = db.Column(db.Integer, primary_key=True)
  location = db.Column(db.String(50), nullable=False)
  #date = db.Column(db.DateTime, nullable=False)
  duration = db.Column(db.String(10), nullable=False)
  details = db.Column(db.Text, nullable=False)
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
      'duration': self.duration,
      'details': self.duration,
      'tasker_id': self.tasker_id,
      'user_id': self.user_id,
      'category_id': self.category_id,
      'category': self.category.name,
      'tasker_FN': self.tasker.user.first_name,
      'tasker_LN': self.tasker.user.last_name
    }
