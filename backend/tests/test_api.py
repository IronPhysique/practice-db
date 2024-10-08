import pytest
import os
from flask_jwt_extended import create_access_token
from app import create_app, db
from app.models import Starter, Leaver

@pytest.fixture
def client():
    # Initialize the app with testing configuration
    app = create_app()
    app.config['TESTING'] = True
    app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY')
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'  # Use in-memory database for testing

    client = app.test_client()

    # Set up the application context and create the database schema
    with app.app_context():
        db.create_all()  # Create all tables
        yield client
        db.drop_all()  # Clean up after tests

def test_submit_starter_data(client):
    # Create a JWT token
    access_token = create_access_token(identity={"user_id": 1, "company_id": 123})
    headers = {"Authorization": f"Bearer {access_token}"}

    # Send POST request to add a starter
    response = client.post('/api/submit', json={
        "type": "starter",
        "name": "John Doe",
        "position": "Developer",
        "start_date": "2023-10-01"
    }, headers=headers)

    # Assert that the response is 200 OK and the message is correct
    assert response.status_code == 200
    assert response.json['message'] == "Starter added successfully!"

def test_submit_leaver_data(client):
    # Create a JWT token
    access_token = create_access_token(identity={"user_id": 1, "company_id": 123})
    headers = {"Authorization": f"Bearer {access_token}"}

    # Send POST request to add a leaver
    response = client.post('/api/submit', json={
        "type": "leaver",
        "name": "Jane Smith",
        "position": "Manager",
        "leave_date": "2023-09-30"
    }, headers=headers)

    # Assert that the response is 200 OK and the message is correct
    assert response.status_code == 200
    assert response.json['message'] == "Leaver added successfully!"
