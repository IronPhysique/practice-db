from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from app.models import db, Starter, Leaver
from datetime import datetime

routes = Blueprint('routes', __name__)

def parse_date(date_str):
    try:
        return datetime.strptime(date_str, "%Y-%m-%d").date()
    except ValueError:
        return None

@routes.route('/api/submit', methods=['POST'])
@jwt_required()
def submit_data():
    current_user = get_jwt_identity()  # Get user identity from the token
    data = request.get_json()

    # Determine whether to create a starter or a leaver based on the input
    record_type = data.get('type', '').lower()

    if record_type == 'starter':
        start_date = parse_date(data.get('start_date'))
        if not start_date:
            return jsonify({"error": "Invalid start date format. Use YYYY-MM-DD."}), 400
        
        starter = Starter(
            name=data.get('name'),
            position=data.get('position'),
            start_date=start_date
        )
        try:
            db.session.add(starter)
            db.session.commit()
            return jsonify({"message": "Starter added successfully!"}), 200
        except Exception as e:
            return jsonify({"error": "Error adding starter: " + str(e)}), 500

    elif record_type == 'leaver':
        leave_date = parse_date(data.get('leave_date'))
        if not leave_date:
            return jsonify({"error": "Invalid leave date format. Use YYYY-MM-DD."}), 400
        
        leaver = Leaver(
            name=data.get('name'),
            position=data.get('position'),
            leave_date=leave_date
        )
        try:
            db.session.add(leaver)
            db.session.commit()
            return jsonify({"message": "Leaver added successfully!"}), 200
        except Exception as e:
            return jsonify({"error": "Error adding leaver: " + str(e)}), 500

    return jsonify({"error": "Invalid type. Must be 'starter' or 'leaver'."}), 400
