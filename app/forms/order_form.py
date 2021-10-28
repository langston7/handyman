from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, BooleanField
from wtforms.validators import DataRequired

class OrderForm(FlaskForm):
  category_id = IntegerField('category_id')
  date = StringField('date', validators=[DataRequired()])
  time = StringField('date', validators=[DataRequired()])
  is_complete = BooleanField('is_complete')
  location = StringField('location', validators=[DataRequired()])
  duration = StringField('duration', validators=[DataRequired()])
  details = StringField('details', validators=[DataRequired()])
  user_id = IntegerField('user_id')
  tasker_id = IntegerField('tasker_id')
