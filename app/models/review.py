from .db import db

class Review(db.Model):
  __tablename__ = "reviews"

  id = db.Column(db.Integer, primary_key=True)
  tasker_id = db.Column(db.Integer, db.ForeignKey("taskers.id"))
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
  rating = db.Column(db.Integer, nullable=False)
  content = db.Column(db.Text, nullable=False)

  tasker = db.relationship("Tasker", back_populates="reviews")
  user = db.relationship("User", back_populates="reviews")

  def to_dict(self):
    return {
      'id': self.id,
      'tasker_id': self.tasker_id,
      'content': self.content,
      'user_id': self.user_id,
      'rating': self.rating,
      'user_FN': self.user.first_name,
    }
