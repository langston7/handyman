from flask import Blueprint
from app.models import Tasker

tasker_routes = Blueprint('taskers', __name__)


@tasker_routes.route('/')
def taskers():
  taskers = Tasker.query.all()
  taskersDict = {"taskers" : [tasker.to_dict() for tasker in taskers]}
  return taskersDict
