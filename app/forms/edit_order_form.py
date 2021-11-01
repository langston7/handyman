from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired

class EditOrderForm(FlaskForm):
  details = StringField('details', validators=[DataRequired()])
