"""empty message

Revision ID: c0e104847dfa
Revises: 65b127a465e6
Create Date: 2021-11-18 19:11:14.101864

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c0e104847dfa'
down_revision = '65b127a465e6'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('categories', sa.Column('tasker_id', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'categories', 'taskers', ['tasker_id'], ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'categories', type_='foreignkey')
    op.drop_column('categories', 'tasker_id')
    # ### end Alembic commands ###
