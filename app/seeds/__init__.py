from flask.cli import AppGroup


from .categories import seed_categories, undo_categories
from .taskers import seed_taskers, undo_taskers
from .users import seed_users, undo_users
from .orders import seed_orders, undo_orders
from .reviews import seed_reviews, undo_reviews

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_categories()
    seed_taskers()
    seed_orders()
    seed_reviews()


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_orders()
    undo_reviews()
    undo_categories()
    undo_taskers()
