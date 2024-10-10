from flask import Flask
from flask_cors import CORS  # Import CORS
from flask_jwt_extended import JWTManager
from dotenv import load_dotenv
import os
from app.models import db

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

    # Enable CORS for all routes, allowing requests from the frontend (port 3000)
    CORS(app, resources={r"/*": {"origins": "http://172.167.90.18:3000"}})

    # Initialize the database
    db.init_app(app)

    # Import and register blueprints AFTER initializing the app
    from app.routes import routes
    app.register_blueprint(routes)

    return app
