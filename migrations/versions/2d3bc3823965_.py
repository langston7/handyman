"""empty message

Revision ID: 2d3bc3823965
Revises: 3062fb999dd0
Create Date: 2021-10-21 19:18:53.384930

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2d3bc3823965'
down_revision = '3062fb999dd0'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('taskers_to_categories',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('tasker_id', sa.Integer(), nullable=True),
    sa.Column('category_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['category_id'], ['categories.id'], ),
    sa.ForeignKeyConstraint(['tasker_id'], ['taskers.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('taskers_to_categories')
    # ### end Alembic commands ###
