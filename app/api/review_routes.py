from flask import Blueprint, request
from flask_login import login_required
from app.models import Review, db
from app.forms.review_form import ReviewForm
from app.forms.edit_review_form import EditReviewForm

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
    db.session.add(review)
    db.session.commit()
    return review.to_dict()
  else:
    return {'error': 'Form did not validate'}, 401

@review_routes.route('/<int:id>', methods=['PATCH'])
@login_required
def put_review(id):
  review = Review.query.get(id)
  form = EditReviewForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    review.rating = form.data['rating']
    review.content = form.data['content']
    db.session.commit()
    return review.to_dict()
  else:
    return {'error': 'Form did not validate'}, 401

@review_routes.route('/<int:id>', methods=['DELETE'])
def delete_review(id):
  review = Review.query.get(id)
  db.session.delete(review)
  db.session.commit()
  return {'message': 'Review deleted.'}
