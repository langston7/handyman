"""empty message

Revision ID: 7ec9bb218eea
Revises: 8958c331376a
Create Date: 2021-10-27 11:33:03.620845

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7ec9bb218eea'
down_revision = '8958c331376a'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('orders', sa.Column('date', sa.String(length=50), nullable=False))
    op.add_column('orders', sa.Column('time', sa.String(length=20), nullable=False))
    op.add_column('orders', sa.Column('is_complete', sa.Boolean(), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('orders', 'is_complete')
    op.drop_column('orders', 'time')
    op.drop_column('orders', 'date')
    # ### end Alembic commands ###
