from app.models import db, Tasker

import random

states=['Alabama','Alaska','Arizona','Arkansas','California','Colorado',
  'Connecticut','Delaware', 'Florida','Georgia', 'Hawaii','Idaho',
  'Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine',
  'Maryland','Massachusetts','Michigan','Minnesota', 'Mississippi','Missouri',
  'Montana','Nebraska','Nevada','New Hampshire', 'New Jersey','New Mexico',
  'New York','North Carolina','North Dakota', 'Ohio','Oklahoma','Oregon',
  'Pennsylvania', 'Rhode Island','South Carolina','South Dakota','Tennessee',
  'Texas','Utah','Vermont','Virgin Island','Virginia','Washington',
  'West Virginia','Wisconsin','Wyoming'
]


def seed_taskers():
  for i in range(4, 1000):
    tasker = Tasker(
      user_id=i,
      state=states[random.randint(0,48)],
      bio="I’ve put together, taken apart, and repaired hundreds of items from bunk beds to swing sets. I know what's important: being clean, safe, and I will be wearing an N95 mask throughout.",
      profile_pic="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png",
      tasks_completed=random.randint(0, 150),
      availability_start=8,
      availability_end=22
    )
    db.session.add(tasker)
  db.session.commit()


def undo_taskers():
    db.session.execute('TRUNCATE taskers RESTART IDENTITY CASCADE;')
    db.session.commit()
