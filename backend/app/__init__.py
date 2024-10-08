from flask import Flask
from flask_jwt_extended import JWTManager
from dotenv import load_dotenv
import os
from app.routes import routes  # Ensure proper import for routes

# Load environment variables from .env file
load_dotenv()

def create_app():
    app = Flask(__name__)

    # Register blueprints
    app.register_blueprint(routes)

    # Configure JWT secret key from environment variables
    app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY', 'test_secret_key')  # Fallback for testing

    # Initialize JWT
    JWTManager(app)

    return app
