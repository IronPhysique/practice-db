import pytest
from flask_jwt_extended import create_access_token
from app import create_app

@pytest.fixture
def client():
    # Initialize the app with testing configuration
    app = create_app()
    app.config['TESTING'] = True
    app.config['JWT_SECRET_KEY'] = 'test_secret_key'  # Use a secret key for tests
    client = app.test_client()

    with app.app_context():
        yield client

def test_submit_data(client):
    # Create a JWT token
    access_token = create_access_token(identity={"user_id": 1, "company_id": 123})
    headers = {"Authorization": f"Bearer {access_token}"}

    # Send POST request
    response = client.post('/api/submit', json={"example_data": "test"}, headers=headers)
    
    # Assert that the response is 200 OK
    assert response.status_code == 200
    assert response.json['message'] == "Data submitted successfully!"
