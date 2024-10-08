from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from app.models import db, Starter, Leaver
from datetime import datetime

routes = Blueprint('routes', __name__)

@routes.route('/api/submit', methods=['POST'])
@jwt_required()
def submit_data():
    current_user = get_jwt_identity()  # Get user identity from the token
    data = request.get_json()

    # Determine whether to create a starter or a leaver based on the input
    record_type = data.get('type', '').lower()

    if record_type == 'starter':
        # Convert start_date from string to a Python date object
        start_date = datetime.strptime(data.get('start_date'), "%Y-%m-%d").date()
        starter = Starter(
            name=data.get('name'),
            position=data.get('position'),
            start_date=start_date  # Use the converted date
        )
        db.session.add(starter)
        db.session.commit()
        return jsonify({"message": "Starter added successfully!"}), 200

    elif record_type == 'leaver':
        # Convert leave_date from string to a Python date object
        leave_date = datetime.strptime(data.get('leave_date'), "%Y-%m-%d").date()
        leaver = Leaver(
            name=data.get('name'),
            position=data.get('position'),
            leave_date=leave_date  # Use the converted date
        )
        db.session.add(leaver)
        db.session.commit()
        return jsonify({"message": "Leaver added successfully!"}), 200

    return jsonify({"error": "Invalid type. Must be 'starter' or 'leaver'."}), 400
