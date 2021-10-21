from app.models import db, Category

def seed_categories():
  TVmounting = Category(
    name='TV Mounting'
  )
  FurnitureAssembly = Category(
    name='Furniture Assembly'
  )
  HeavyLifting = Category(
    name='Heavy Lifting'
  )
  Plumbing = Category(
    name='Plumbing'
  )
  Painting = Category(
    name='Painting'
  )
  Moving = Category(
    name='Moving'
  )
  Yardwork = Category(
    name='Yardwork'
  )
  Shopping = Category(
    name='Shopping'
  )
  Cleaning = Category(
    name='Cleaning'
  )


  db.session.add(TVmounting)
  db.session.add(FurnitureAssembly)
  db.session.add(HeavyLifting)
  db.session.add(Plumbing)
  db.session.add(Painting)
  db.session.add(Moving)
  db.session.add(Yardwork)
  db.session.add(Shopping)
  db.session.add(Cleaning)

  db.session.commit()


def undo_categories():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()
