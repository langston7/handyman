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
    robert = User(
        first_name='Robert',
        last_name='Stevenson',
        email='bobbie@aa.io',
        password='password',
        is_tasker=True
    )
    kenneth = User(
        first_name='Kenneth',
        last_name='Lee',
        email="ken@aa.io",
        password='password',
        is_tasker=True
    )
    ish = User(
        first_name='Ishmail',
        last_name='Manjlai',
        email="ish@aa.io",
        password='password',
        is_tasker=True
    )
    jordan = User(
        first_name='Jordan',
        last_name='Guevara',
        email="jordan@aa.io",
        password='password',
        is_tasker=True
    )
    jason = User(
        first_name='Jason',
        last_name='Cachela',
        email="jason@aa.io",
        password='password',
        is_tasker=True
    )
    eric = User(
        first_name='Eric',
        last_name='Quan',
        email="eric@aa.io",
        password='password',
        is_tasker=True
    )
    trevin = User(
        first_name='Trevin',
        last_name='Woods',
        email="trevin@aa.io",
        password='password',
        is_tasker=True
    )
    alejandro = User(
        first_name='Alejandro',
        last_name='C. Grant',
        email="alejandro@aa.io",
        password='password',
        is_tasker=True
    )
    steven = User(
        first_name='Steven',
        last_name='Barnett',
        email="steven@aa.io",
        password='password',
        is_tasker=True
    )
    basel = User(
        first_name='Basel',
        last_name='Hassan',
        email="basel@aa.io",
        password='password',
        is_tasker=True
    )
    sherry = User(
        first_name='Sherry',
        last_name='Yu',
        email="sherry@aa.io",
        password='password',
        is_tasker=True
    )
    andrew = User(
        first_name='Andrew',
        last_name='Derocher',
        email="andrew@aa.io",
        password='password',
        is_tasker=True
    )
    arnold = User(
        first_name='Arnold',
        last_name='Cabang',
        email="arnold@aa.io",
        password='password',
        is_tasker=True
    )
    fanny = User(
        first_name='Fanny',
        last_name='Chan',
        email="fanny@aa.io",
        password='password',
        is_tasker=True
    )
    william = User(
        first_name='William',
        last_name='Jang',
        email="yung@aa.io",
        password='password',
        is_tasker=True
    )
    jami = User(
        first_name='Jami',
        last_name='Travers',
        email="jami@aa.io",
        password='password',
        is_tasker=True
    )
    peter = User(
        first_name='Peter',
        last_name='Joh',
        email="peter@aa.io",
        password='password',
        is_tasker=True
    )
    michael = User(
        first_name='Michael',
        last_name='End',
        email="michael@aa.io",
        password='password',
        is_tasker=True
    )
    kekoa = User(
        first_name='Kekroa',
        last_name='Boromeo',
        email="kekoa@aa.io",
        password='password',
        is_tasker=True
    )
    josue = User(
        first_name='Josue',
        last_name='Lugaro',
        email="josue@aa.io",
        password='password',
        is_tasker=True
    )

    db.session.add(demo)
    db.session.add(ellen)
    db.session.add(robert)
    db.session.add(kenneth)
    db.session.add(ish)
    db.session.add(jordan)
    db.session.add(jason)
    db.session.add(eric)
    db.session.add(trevin)
    db.session.add(alejandro)
    db.session.add(steven)
    db.session.add(basel)
    db.session.add(sherry)
    db.session.add(andrew)
    db.session.add(arnold)
    db.session.add(fanny)
    db.session.add(william)
    db.session.add(jami)
    db.session.add(peter)
    db.session.add(michael)
    db.session.add(kekoa)
    db.session.add(josue)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
