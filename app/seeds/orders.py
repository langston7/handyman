from app.models import db, Order

def seed_orders():
  pass

def undo_orders():
  db.session.execute('TRUNCATE orders RESTART IDENTITY CASCADE;')
  db.session.commit()
