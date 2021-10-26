from app.models import db, Category

def seed_categories():
  TVmounting = Category(
    name='Mounting',
    img_src="https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto/v1593211202/zxemkazleifylihcm7mo.jpg"
  )
  FurnitureAssembly = Category(
    name='Furniture Assembly',
    img_src="https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto/v1595531361/q23uithiz4b1osipsxta.jpg"
  )
  HeavyLifting = Category(
    name='Heavy Lifting',
    img_src="https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto/v1562090409/j6dtjagxmukehexyt8o7.jpg"
  )
  Plumbing = Category(
    name='Plumbing',
    img_src="https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto/v1553096950/xrxccoc5mrtpi1kczej3.jpg"
  )
  Painting = Category(
    name='Painting',
    img_src="https://www.bergerpaints.com/blog/wp-content/uploads/2019/10/10-Steps-to-Painting-Walls-like-a-Pro.png"
  )
  Moving = Category(
    name='Moving',
    img_src="https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto/v1562090409/j6dtjagxmukehexyt8o7.jpg"
  )
  Yardwork = Category(
    name='Yardwork',
    img_src="https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto/v1593211031/vbcqollfmjosmlbkehzp.jpg"
  )
  Shopping = Category(
    name='Shopping',
    img_src="https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto/v1593210800/cgl0qk6cfk0swd42vxn4.jpg"
  )
  Cleaning = Category(
    name='Cleaning',
    img_src="https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto/v1593210961/dmux65awyw38sznjmoqr.jpg"
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
