from .db import db
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()
class Review(Base):
  __tablename__ = "reviews"

  id = db.Column(db.Integer, primary_key=True)
  tasker_id = db.Column(db.Integer, db.ForeignKey("taskers.id"))
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
  rating = db.Column(db.Integer, nullable=False)
  content = db.Column(db.Integer, nullable=False)

  tasker = db.relationship("Tasker", back_populates="reviews")
  user = db.relationship("User", back_populates="reviews")

  def to_dict(self):
    return {
      'id': self.id,
      'tasker_id': self.tasker_id,
      'user_id': self.user_id,
      'rating': self.rating,
      'content': self.content,
      'tasker': self.tasker,
      'user': self.user,
    }
