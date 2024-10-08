import pytest
from app import create_app  # Import your app factory

@pytest.fixture
def client():
    app = create_app()  # Ensure you have an app factory function
    app.config['TESTING'] = True
    client = app.test_client()

    with app.app_context():
        yield client

def test_get_data(client):
    response = client.get('/api/data')  # Send a GET request to the endpoint
    assert response.status_code == 200  # Check if the status code is 200
    assert response.json == {"data": "sample data"}  # Check if the response matches expected output
