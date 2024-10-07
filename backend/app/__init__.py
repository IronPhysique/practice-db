from flask import Flask
from flask_jwt_extended import JWTManager
from app.routes import routes

def create_app():
    app = Flask(__name__)
    
    app.config['JWT_SECRET_KEY'] = 'your_jwt_secret_key'  # Change this to something secure
    jwt = JWTManager(app)

    # Register routes
    app.register_blueprint(routes)

    return app
