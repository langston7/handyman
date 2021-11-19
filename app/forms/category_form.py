from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.fields.core import IntegerField
from wtforms.validators import DataRequired

class CategoryForm(FlaskForm):
  category = StringField('category', validators=[DataRequired()])
  img_src = StringField('img_src', validators=[DataRequired()])
  tasker_id = IntegerField('tasker_id')
