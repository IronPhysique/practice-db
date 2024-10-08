from flask import Flask
from flask_jwt_extended import JWTManager
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
import os
from app.routes import routes  # Ensure proper import for routes

# Initialize SQLAlchemy instance
db = SQLAlchemy()

# Load environment variables from .env file
load_dotenv()

def create_app():
    app = Flask(__name__)

    # SQLite database configuration
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'  # Database file
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    # Register blueprints
    app.register_blueprint(routes)

    # Configure JWT secret key from environment variables
    app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY', 'test_secret_key')  # Fallback for testing

    # Initialize JWT
    JWTManager(app)

    # Initialize the database
    db.init_app(app)

    return app
