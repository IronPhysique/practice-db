from .. import db
from datetime import datetime

# Define the Starter model
class Starter(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    position = db.Column(db.String(100), nullable=False)
    start_date = db.Column(db.Date, nullable=False, default=datetime.timezone.utc)

# Define the Leaver model
class Leaver(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    position = db.Column(db.String(100), nullable=False)
    leave_date = db.Column(db.Date, nullable=False, default=datetime.timezone.utc)
