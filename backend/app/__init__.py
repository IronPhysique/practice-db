from flask import Flask
from flask_jwt_extended import JWTManager
from dotenv import load_dotenv
import os
from app.models import db  # Import db from models

# Load environment variables from .env file
load_dotenv()

def create_app():
    app = Flask(__name__)

    # SQLite database configuration
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    # Configure JWT secret key from environment variables
    app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY', 'test_secret_key')

    # Initialize JWT
    JWTManager(app)

    # Initialize the database
    db.init_app(app)

    # Import and register blueprints AFTER initializing the app
    from app.routes import routes  # Import routes here to avoid circular imports
    app.register_blueprint(routes)

    return app
