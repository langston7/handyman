from app.models import db, Tasker

import random

def seed_taskers():
  robert = Tasker(
    user_id=3,
    state="New Jersey",
    bio="I’ve put together, taken apart, and repaired hundreds of items from bunk beds to swing sets. I know what's important: being clean, safe, and I will be wearing an N95 mask throughout.",
    profile_pic="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png",
    tasks_completed=50,
    availability_start=8,
    availability_end=22,
  )
  kenneth = Tasker(
    user_id=4,
    state="New Jersey",
    bio="I’ve put together, taken apart, and repaired hundreds of items from bunk beds to swing sets. I know what's important: being clean, safe, and I will be wearing an N95 mask throughout.",
    profile_pic="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png",
    tasks_completed=random.randint(0, 150),
    availability_start=8,
    availability_end=22,
  )
  ish = Tasker(
    user_id=5,
    state="New Jersey",
    bio="I’ve put together, taken apart, and repaired hundreds of items from bunk beds to swing sets. I know what's important: being clean, safe, and I will be wearing an N95 mask throughout.",
    profile_pic="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png",
    tasks_completed=random.randint(0, 150),
    availability_start=8,
    availability_end=22,
  )
  jordan = Tasker(
    user_id=6,
    state="New Jersey",
    bio="I’ve put together, taken apart, and repaired hundreds of items from bunk beds to swing sets. I know what's important: being clean, safe, and I will be wearing an N95 mask throughout.",
    profile_pic="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png",
    tasks_completed=random.randint(0, 150),
    availability_start=8,
    availability_end=22,
  )
  jason = Tasker(
    user_id=7,
    state="New Jersey",
    bio="I’ve put together, taken apart, and repaired hundreds of items from bunk beds to swing sets. I know what's important: being clean, safe, and I will be wearing an N95 mask throughout.",
    profile_pic="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png",
    tasks_completed=random.randint(0, 150),
    availability_start=8,
    availability_end=22,
  )
  eric = Tasker(
    user_id=8,
    state="New Jersey",
    bio="I’ve put together, taken apart, and repaired hundreds of items from bunk beds to swing sets. I know what's important: being clean, safe, and I will be wearing an N95 mask throughout.",
    profile_pic="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png",
    tasks_completed=random.randint(0, 150),
    availability_start=8,
    availability_end=22,
  )
  trevin = Tasker(
    user_id=9,
    state="New Jersey",
    bio="I’ve put together, taken apart, and repaired hundreds of items from bunk beds to swing sets. I know what's important: being clean, safe, and I will be wearing an N95 mask throughout.",
    profile_pic="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png",
    tasks_completed=random.randint(0, 150),
    availability_start=8,
    availability_end=22,
  )
  alejandro = Tasker(
    user_id=10,
    state="New Jersey",
    bio="I’ve put together, taken apart, and repaired hundreds of items from bunk beds to swing sets. I know what's important: being clean, safe, and I will be wearing an N95 mask throughout.",
    profile_pic="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png",
    tasks_completed=random.randint(0, 150),
    availability_start=8,
    availability_end=22,
  )
  steven = Tasker(
    user_id=11,
    state="New Jersey",
    bio="I’ve put together, taken apart, and repaired hundreds of items from bunk beds to swing sets. I know what's important: being clean, safe, and I will be wearing an N95 mask throughout.",
    profile_pic="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png",
    tasks_completed=random.randint(0, 150),
    availability_start=8,
    availability_end=22,
  )
  basel = Tasker(
    user_id=12,
    state="New Jersey",
    bio="I’ve put together, taken apart, and repaired hundreds of items from bunk beds to swing sets. I know what's important: being clean, safe, and I will be wearing an N95 mask throughout.",
    profile_pic="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png",
    tasks_completed=random.randint(0, 150),
    availability_start=8,
    availability_end=22,
  )
  sherry = Tasker(
    user_id=13,
    state="New Jersey",
    bio="I’ve put together, taken apart, and repaired hundreds of items from bunk beds to swing sets. I know what's important: being clean, safe, and I will be wearing an N95 mask throughout.",
    profile_pic="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png",
    tasks_completed=random.randint(0, 150),
    availability_start=8,
    availability_end=22,
  )
  andrew = Tasker(
    user_id=14,
    state="New Jersey",
    bio="I’ve put together, taken apart, and repaired hundreds of items from bunk beds to swing sets. I know what's important: being clean, safe, and I will be wearing an N95 mask throughout.",
    profile_pic="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png",
    tasks_completed=random.randint(0, 150),
    availability_start=8,
    availability_end=22,
  )
  arnold = Tasker(
    user_id=15,
    state="New Jersey",
    bio="I’ve put together, taken apart, and repaired hundreds of items from bunk beds to swing sets. I know what's important: being clean, safe, and I will be wearing an N95 mask throughout.",
    profile_pic="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png",
    tasks_completed=random.randint(0, 150),
    availability_start=8,
    availability_end=22,
  )
  fanny = Tasker(
    user_id=16,
    state="New Jersey",
    bio="I’ve put together, taken apart, and repaired hundreds of items from bunk beds to swing sets. I know what's important: being clean, safe, and I will be wearing an N95 mask throughout.",
    profile_pic="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png",
    tasks_completed=random.randint(0, 150),
    availability_start=8,
    availability_end=22,
  )
  william = Tasker(
    user_id=17,
    state="New Jersey",
    bio="I’ve put together, taken apart, and repaired hundreds of items from bunk beds to swing sets. I know what's important: being clean, safe, and I will be wearing an N95 mask throughout.",
    profile_pic="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png",
    tasks_completed=random.randint(0, 150),
    availability_start=8,
    availability_end=22,
  )
  jami = Tasker(
    user_id=18,
    state="New Jersey",
    bio="I’ve put together, taken apart, and repaired hundreds of items from bunk beds to swing sets. I know what's important: being clean, safe, and I will be wearing an N95 mask throughout.",
    profile_pic="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png",
    tasks_completed=random.randint(0, 150),
    availability_start=8,
    availability_end=22,
  )
  peter = Tasker(
    user_id=19,
    state="New Jersey",
    bio="I’ve put together, taken apart, and repaired hundreds of items from bunk beds to swing sets. I know what's important: being clean, safe, and I will be wearing an N95 mask throughout.",
    profile_pic="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png",
    tasks_completed=random.randint(0, 150),
    availability_start=8,
    availability_end=22,
  )
  michael = Tasker(
    user_id=20,
    state="Alabama",
    bio="I’ve put together, taken apart, and repaired hundreds of items from bunk beds to swing sets. I know what's important: being clean, safe, and I will be wearing an N95 mask throughout.",
    profile_pic="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png",
    tasks_completed=random.randint(0, 150),
    availability_start=8,
    availability_end=22,
  )
  kekoa = Tasker(
    user_id=21,
    state="Alabama",
    bio="I’ve put together, taken apart, and repaired hundreds of items from bunk beds to swing sets. I know what's important: being clean, safe, and I will be wearing an N95 mask throughout.",
    profile_pic="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png",
    tasks_completed=random.randint(0, 150),
    availability_start=8,
    availability_end=22,
  )
  josue = Tasker(
    user_id=22,
    state="Alabama",
    bio="I’ve put together, taken apart, and repaired hundreds of items from bunk beds to swing sets. I know what's important: being clean, safe, and I will be wearing an N95 mask throughout.",
    profile_pic="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png",
    tasks_completed=random.randint(0, 150),
    availability_start=8,
    availability_end=22,
  )

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


def undo_taskers():
    db.session.execute('TRUNCATE taskers RESTART IDENTITY CASCADE;')
    db.session.commit()
