from .db import db
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

tasker_categories = db.Table(
  "tasker_categories",
  Base.metadata,
  db.Column("tasker_id", db.ForeignKey("taskers.id", primary_key=True)),
  db.Column("category_id", db.ForeignKey("categories.id", primary_key=True)),
)

class Tasker(Base):
  __tablename__ = 'taskers'

  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, nullable=False)
  state = db.Column(db.String(20), nullable=False)
  tasks_completed = db.Column(db.Integer, nullable=False)
  availability_start = db.Column(db.Integer, nullable=False)
  availability_end = db.Column(db.Integer, nullable=False)

  orders = db.relationship("Order", back_populates="tasker")
  reviews = db.relationship("Review", back_populates="tasker")
  categories = db.relationship(
    "Category",
    secondary=tasker_categories,
    back_populates="taskers"
  )

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


class Category(Base):
  __tablename__ = 'categories'

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(40), nullable=False)
  orders = db.relationship("Order", back_populates="category")
  taskers = db.relationship(
    "Tasker",
    secondary=tasker_categories,
    back_populates="categories"
  )

  def to_dict(self):
    return {
      'id': self.id,
      'name': self.name,
      'orders': self.orders,
      'taskers': self.taskers
    }
