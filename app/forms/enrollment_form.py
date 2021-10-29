from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired


class EnrollmentForm(FlaskForm):
    first_name = StringField(
        'first_name', validators=[DataRequired()])
    last_name = StringField(
        'last_name', validators=[DataRequired()])
    email = StringField('email', validators=[DataRequired()])
    password = StringField('password', validators=[DataRequired()])
    bio = StringField('bio', validators=[DataRequired()])
    state = StringField('state', validators=[DataRequired()])
