import pytest
from flask import jsonify
from flask_jwt_extended import create_access_token
from app import create_app

@pytest.fixture
def client():
    app = create_app()  # Initialize your app
    app.config['TESTING'] = True
    client = app.test_client()
    with app.app_context():
        yield client

def test_submit_data(client):
    # Create a JWT token
    access_token = create_access_token(identity={"user_id": 1, "company_id": 123})
    headers = {"Authorization": f"Bearer {access_token}"}

    # Send POST request
    response = client.post('/api/submit', json={"example_data": "test"}, headers=headers)
    assert response.status_code == 200
    assert response.json['message'] == "Data submitted successfully!"
