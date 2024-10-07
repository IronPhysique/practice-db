from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity

routes = Blueprint('routes', __name__)

@routes.route('/api/submit', methods=['POST'])
@jwt_required()
def submit_data():
    current_user = get_jwt_identity()  # Get user identity from the token
    data = request.get_json()

    # Logic to handle company-specific data isolation here
    # For example, use current_user['company_id'] to isolate data

    # Sample response
    return jsonify({"message": "Data submitted successfully!", "data": data}), 200
