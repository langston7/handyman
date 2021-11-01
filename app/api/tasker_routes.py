from flask import Blueprint
from app.models import Tasker

tasker_routes = Blueprint('taskers', __name__)


@tasker_routes.route('/')
def taskers():
  taskers = Tasker.query.all()
  taskersDict = {"taskers" : [tasker.to_dict() for tasker in taskers]}
  return taskersDict

@tasker_routes.route('/<int:id>')
def one_tasker(id):
  tasker = Tasker.query.get(id)
  return tasker.to_dict()

@tasker_routes.route('/byuser/<int:user_id>')
def one_tasker_by_user_id(user_id):
  tasker = Tasker.query.filter(Tasker.user_id == user_id).first()
  return tasker.to_dict()
