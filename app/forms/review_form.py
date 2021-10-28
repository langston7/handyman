from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class ReviewForm(FlaskForm):
  rating = IntegerField('rating')
  content = StringField('content', validators=[DataRequired()])
  user_id = IntegerField('user_id')
  tasker_id = IntegerField('tasker_id')
