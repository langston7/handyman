from flask import Blueprint, request
from app.models import Category, db
from app.forms.category_form import CategoryForm

category_routes = Blueprint('categories', __name__)


@category_routes.route('/')
def categories():
  categories = Category.query.all()
  categoriesDict = {"categories" : [category.to_dict() for category in categories]}
  return categoriesDict

@category_routes.route('/', methods=['POST'])
def post_category():
  form = CategoryForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    category = Category(
      name = (form.data['category']),
      img_src = (form.data['img_src']),
      tasker_id = (form.data['tasker_id'])
    )
    db.session.add(category)
    db.session.commit()
    return category.to_dict()
  else:
    return {'error': 'Form did not validate'}, 401


@category_routes.route('/<int:id>', methods=['DELETE'])
def delete_category(id):
  category = Category.query.get(id)
  db.session.delete(category)
  db.session.commit()
  return {'message': 'Category deleted.'}
