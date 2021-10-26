from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class OrderForm(FlaskForm):
  category_id = IntegerField('category_id')
  location = StringField('location', validators=[DataRequired()])
  duration = StringField('duration')
  details = StringField('details')
  user_id = IntegerField('user_id')
  tasker_id = IntegerField('tasker_id')
