from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class EditReviewForm(FlaskForm):
  rating = IntegerField('rating', validators=[DataRequired()])
  content = StringField('content', validators=[DataRequired()])
