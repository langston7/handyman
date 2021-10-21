from app.models import db, Tasker


def seed_taskers():
  bobbie = Tasker(
    user_id=3,
    state="New Jersey",
    tasks_completed=50,
    availability_start=9,
    availability_end=18
  )

  db.session.add(bobbie)
  db.session.commit()


def undo_taskers():
    db.session.execute('TRUNCATE taskers RESTART IDENTITY CASCADE;')
    db.session.commit()
