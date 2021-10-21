from app.models import db, User


def seed_users():
    demo = User(
        first_name='Demo',
        last_name='Man',
        email='demo@aa.io',
        password='password',
        is_tasker=False
    )
    ellen = User(
        first_name='Ellen',
        last_name='Filsburough',
        email='marnie@aa.io',
        password='password',
        is_tasker=False
    )
    bobbie = User(
        first_name='Robert',
        last_name='Stevenson',
        email='bobbie@aa.io',
        password='password',
        is_tasker=True
    )

    db.session.add(demo)
    db.session.add(ellen)
    db.session.add(bobbie)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
