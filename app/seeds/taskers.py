from app.models import db, Tasker


def seed_taskers():
  bobbie = Tasker(
    user_id=3,
    state="New Jersey",
    bio="I’ve put together, taken apart, and repaired hundreds of items from bunk beds to swing sets. I know what's important: being clean, safe, and I will be wearing an N95 mask throughout.",
    profile_pic="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png",
    tasks_completed=50,
    availability_start=9,
    availability_end=18,
  )

  db.session.add(bobbie)
  db.session.commit()


def undo_taskers():
    db.session.execute('TRUNCATE taskers RESTART IDENTITY CASCADE;')
    db.session.commit()
