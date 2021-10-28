from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Review, db
from app.forms.review_form import ReviewForm

review_routes = Blueprint('reviews', __name__)


@review_routes.route('/')
def reviews():
  reviews = Review.query.all()
  reviewsDict = {"reviews" : [review.to_dict() for review in reviews]}
  return reviewsDict

@review_routes.route('/myReviews')
def myReviews():
  reviews = Review.query.all()
  reviewsDict = {"reviews" : [review.to_dict() for review in reviews]}
  return reviewsDict

@review_routes.route('/', methods=['POST'])
@login_required
def post_review():
  form = ReviewForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    review = Review(
      rating = (form.data['rating']),
      content = (form.data['content']),
      user_id = (form.data['user_id']),
      tasker_id = (form.data['tasker_id'])
    )
    print(review)
    db.session.add(review)
    db.session.commit()
    return review.to_dict()
  else:
    return {'error': 'Form did not validate'}, 401
