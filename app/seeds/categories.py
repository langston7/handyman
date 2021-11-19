from app.models import db, Category

def seed_categories():
  TVmounting = Category(
    name='Mounting',
    img_src="https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto/v1593211202/zxemkazleifylihcm7mo.jpg",
    tasker_id=1
  )
  FurnitureAssembly = Category(
    name='Furniture Assembly',
    img_src="https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto/v1595531361/q23uithiz4b1osipsxta.jpg",
    tasker_id=1
  )
  HeavyLifting = Category(
    name='Heavy Lifting',
    img_src="https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto/v1562090409/j6dtjagxmukehexyt8o7.jpg",
    tasker_id=1
  )
  Plumbing = Category(
    name='Plumbing',
    img_src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Pipes_various.jpg/1024px-Pipes_various.jpg",
    tasker_id=1
  )
  Painting = Category(
    name='Painting',
    img_src="https://www.bergerpaints.com/blog/wp-content/uploads/2019/10/10-Steps-to-Painting-Walls-like-a-Pro.png",
    tasker_id=1
  )
  Moving = Category(
    name='Moving',
    img_src="https://www.ikea.com/us/en/images/products/jaettene-moving-box-brown__0711149_pe728017_s5.jpg",
    tasker_id=1
  )
  Yardwork = Category(
    name='Yardwork',
    img_src="https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto/v1593211031/vbcqollfmjosmlbkehzp.jpg",
    tasker_id=1
  )
  Shopping = Category(
    name='Shopping',
    img_src="https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto/v1593210800/cgl0qk6cfk0swd42vxn4.jpg",
    tasker_id=1
  )
  Cleaning = Category(
    name='Cleaning',
    img_src="https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto/v1593210961/dmux65awyw38sznjmoqr.jpg",
    tasker_id=1
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
