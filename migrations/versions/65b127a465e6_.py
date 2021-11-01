"""empty message

Revision ID: 65b127a465e6
Revises: cb2393035724
Create Date: 2021-10-31 20:13:52.308259

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '65b127a465e6'
down_revision = 'cb2393035724'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('users', 'first_name',
               existing_type=sa.VARCHAR(length=40),
               type_=sa.String(length=20),
               existing_nullable=False)
    op.alter_column('users', 'last_name',
               existing_type=sa.VARCHAR(length=40),
               type_=sa.String(length=20),
               existing_nullable=False)
    op.alter_column('users', 'email',
               existing_type=sa.VARCHAR(length=100),
               type_=sa.String(length=40),
               existing_nullable=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('users', 'email',
               existing_type=sa.String(length=40),
               type_=sa.VARCHAR(length=100),
               existing_nullable=False)
    op.alter_column('users', 'last_name',
               existing_type=sa.String(length=20),
               type_=sa.VARCHAR(length=40),
               existing_nullable=False)
    op.alter_column('users', 'first_name',
               existing_type=sa.String(length=20),
               type_=sa.VARCHAR(length=40),
               existing_nullable=False)
    # ### end Alembic commands ###