from app.models import db, Order

def seed_orders():
  order1 = Order(
    location = "Alabama",
    date = "2021-11-02",
    time = "Morning",
    duration = "small",
    details = "Please move things around my house.",
    is_complete = False,
    tasker_id = 1,
    user_id = 1,
    category_id = 1
  )
  order2 = Order(
    location = "Alabama",
    date = "2021-11-03",
    time = "Morning",
    duration = "medium",
    details = "Please move things around my house.",
    is_complete = False,
    tasker_id = 1,
    user_id = 1,
    category_id = 2
  )
  order3 = Order(
    location = "Alabama",
    date = "2021-11-04",
    time = "Morning",
    duration = "large",
    details = "Please move things around my house.",
    is_complete = False,
    tasker_id = 1,
    user_id = 1,
    category_id = 3
  )

  db.session.add(order1)
  db.session.add(order2)
  db.session.add(order3)
  db.session.commit()


def undo_orders():
  db.session.execute('TRUNCATE orders RESTART IDENTITY CASCADE;')
  db.session.commit()
