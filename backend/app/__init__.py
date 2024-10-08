from flask import Flask
from flask_jwt_extended import JWTManager
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

def create_app():
    app = Flask(__name__)

    # Configure the JWT secret key from environment variables
    app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY')

    # Initialize the JWT manager
    jwt = JWTManager(app)

    return app
