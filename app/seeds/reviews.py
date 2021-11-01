from app.models import db, Review
import random

def seed_reviews():
  for i in range(1, 997):
    for j in range(1, 4):
      review = Review(
          tasker_id=i,
          user_id=random.randint(1, 3),
          rating=random.randint(1, 5),
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor ut tellus ac interdum. Pellentesque mauris tellus, viverra a nulla id, placerat cursus felis. Quisque interdum convallis leo, vitae pellentesque massa pretium ut. Ut vitae viverra sem. Donec pellentesque elit eu nisi eleifend, sit amet luctus sem sollicitudin."
      )
      db.session.add(review)
  db.session.commit()

def undo_reviews():
  db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
  db.session.commit()
