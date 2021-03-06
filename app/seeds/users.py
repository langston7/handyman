from app.models import db, User
import random
first_names = ['Steve', 'Bill', 'Ken', "Danny", "Vladmir", "Norman", "Edward", "Diamond", "Cecil", "Ryan", "Spencer", "Vincent", "Samuel", "Nick", "Jhett", "Trevor", "Trey", "Jack" ]
last_names = ['A.', 'B.', 'C.', 'D.', 'E.', 'F.', 'G.', 'H.', 'J.', 'K.', 'L.', 'M.', 'O.', 'P.', 'R.', 'S.', 'T.']

def seed_users():
    demo = User(
        first_name='Demo',
        last_name='User',
        email='demo@aa.io',
        password='password',
        is_tasker=False
    )
    steve = User(
        first_name='Steve',
        last_name="Spit",
        email='steve@aa.io',
        password='password',
        is_tasker=False
    )
    eric = User(
        first_name='Eric',
        last_name="Mahoney",
        email='eric@aa.io',
        password='password',
        is_tasker=False
    )

    db.session.add(demo)
    db.session.add(steve)
    db.session.add(eric)

    for i in range(500):
        user = User(
            first_name=first_names[random.randint(0, 17)],
            last_name=last_names[random.randint(0, 16)],
            email=(str(i) + "abc@aa.io"),
            password='password',
            is_tasker=True
        )
        db.session.add(user)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
