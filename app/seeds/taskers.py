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

avatars=[
  'https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_100,w_100/v1603898396/pncdf1uyhjn8jpjcbogu.jpg',
  'https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_100,w_100/v1536956935/rnvgjqb6sedpox1cxkd3.jpg',
  'https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_100,w_100/v1613915134/opvi3vgtwbp8ek9by5wb.jpg',
  'https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_108,w_108/v1601051235/vfsiljlrbwvs3ylf6age.jpg',
  'https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_108,w_108/v1594060470/t6gacr0bbtua3uxjftgz.jpg',
  'https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_108,w_108/v1602979068/vk4skaauuwnvypjbkae5.jpg',
  'https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_108,w_108/v1631499585/zgn5yftgmrwhwfdlwd6e.jpg',
  'https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_108,w_108/v1536315127/zxkajqsfjfqsurxccgnb.jpg',
  'https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_108,w_108/v1583612975/mzgohyfqzjgwrkrntkak.jpg',
  'https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_108,w_108/v1520870135/krl2yzsxxaujzlolbacw.jpg',
  'https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_108,w_108/v1625700439/rig6guv5kqmikolkqovs.jpg',
  'https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_108,w_108/v1603380951/kgixqydkjmpqhfbcycv1.jpg',
  'https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_108,w_108/v1639605710/tabq7zoywqac9bphrmno.jpg',
  'https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_108,w_108/v1623586135/qs05slqdy0gerxzpwboz.jpg',
  'https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_108,w_108/v1613839999/xsklxoojgm7d1dga1jkp.jpg',
  'https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_108,w_108/v1574200225/bp2yrdg7grgyalaxiy5s.jpg',
  'https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_108,w_108/v1572578113/barxopnzlattpzv62f7z.jpg',
  'https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_108,w_108/v1632236546/t4plmxasb4revajtkdqw.jpg',
  'https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_108,w_108/v1545268776/rnvguw4lhrpx4y7qb6be.jpg',
  'https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_108,w_108/v1593501286/axwzsa4e8pp02htgccas.jpg',
  'https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_108,w_108/v1586035523/h6xchy1edys4fmrgoq2h.jpg',
  'https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_108,w_108/v1622768644/qsiqrgna9ddufhimrcxx.jpg',
  'https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_108,w_108/v1570209703/u4vj41vasb2ouguhunpp.jpg',
  'https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_108,w_108/v1565025525/hfczgps9hyv4d3h56scd.jpg',
  'https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_108,w_108/v1630173561/rkqzajkoxni3zncgtxxw.jpg'
]


bios=[
  "I have 8+ years experience hanging art and shelving, tv wall mounts, and mirrors. ",
  "I’ve put together, taken apart, and repaired hundreds of items from bunk beds to swing sets. I know what's important: being clean, safe, and I will be wearing an N95 mask throughout.",
  "I bring my own supplies and would love to get the job done",
  "Whether your hanging your memories on the wall, or a big screen for the big game. With the knowledge and experience I’ve acquired over the past 7 years, I’m the man for the job. Let me hope make your house, a home.",
  "I have excellent experience in many types of mounting job. I can mount tv,picture, shelfs, watches,curtains,blinds,cabinets,mirrors, ac.I do my job accurately, responsibly, quick and clean! You gonna be charged for two hours, even if i finish faster.",
  "Experienced at mounting TVs, ACs, framed art, mirrors, curtain rods, etc.. Can provide tools and materials, or shop for necessary materials and supply a receipt for reimbursement. Interior design knowledge applied safely, and with aesthetic appeal. ",
  "I can mount and fix anything you need!I have 2 year of experience and I do professional, fast and reliable job! Mountings, including closet organizers, paintings/pictures, fixtures & shelving. I have drills & drill bits. ",
  "With over ten years in the moving and delivery field, I have constantly been exposed to mountings task. Television, pictures, mirrors etc. I've done them all.",
  "Expert Mounter , I Mount TV’s , Shelves , Curtains & More For A Great Price. I bring my own tools and screws for use",
  "I have a years of experience in variety of projects.I’m responsible,punctual and professional.I will help you with Maximum Efficiency",
  "Vaccinated!! Mounting of TVs, art, a/c, mirrors, curtains, shelves. I have tools, drill and screws. If you need ladder say about it. ",
  "I have a big experience in mounting and satisfying all your wishes. I can mount blinds, curtains, TVs, mirrors, shelves, pictures etc. I have all tools and equipment to do mounting. I don't have a ladder! ",
  "Vaccinated! I have a tools and experience to handle TV, set up window AC, install blinds and hang up pictures on a walls. I am tall enough ( 6'2) but if you need put something very high please have a ladder or chair",
  "Completed 700+ mountings, including closet organizers, tv, paintings/pictures, fixtures & shelving. I have various drills & drill bits, and supplies that work for dry wall, concrete, brick and etc, and various required anchors. I have a stud finder.",
  "I can mount and fix anything you need!I have 15 year of experience and I do professional,fast and reliable job!",
  "Experience gained through personal and professional jobs. Eager to handle your task with care and efficiency. ",
  "I'm very proficient in securing/mounting TVs and other items. Can mount any item onto just about any wall surface. I have a variety of wall anchors and tools used to do the job right. I don't have a ladder!",
  "I have long time experienced , I am friendly and always doing on my best to make customers successful ",
  "I'm a perfectionist in mounting. I have all necessary tools even for concrete walls and hardware except a ladder also my height is 6,3 ft so usually regular chair is enough. I don't do mounting in concrete ceiling",
]

def seed_taskers():
  for i in range(4, 500):
    tasker = Tasker(
      user_id=i,
      state=states[random.randint(0,48)],
      bio=bios[random.randint(0,17)],
      profile_pic=avatars[random.randint(0,22)],
      tasks_completed=random.randint(0, 150),
      availability_start=8,
      availability_end=22
    )
    db.session.add(tasker)
  db.session.commit()


def undo_taskers():
    db.session.execute('TRUNCATE taskers RESTART IDENTITY CASCADE;')
    db.session.commit()
