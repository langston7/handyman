from app.models import db, Review

def seed_reviews():
  pass

def undo_reviews():
  db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
  db.session.commit()
