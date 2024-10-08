from flask import Flask
from flask_jwt_extended import JWTManager
from dotenv import load_dotenv
import os
from app.routes import routes  # Ensure correct path to routes

# Load environment variables from .env file
load_dotenv()

def create_app():
    app = Flask(__name__)
    
    # Register blueprint routes
    app.register_blueprint(routes)

    # Configure the JWT secret key from environment variables
    app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY')

    # Initialize the JWT manager
    jwt = JWTManager(app)

    return app
