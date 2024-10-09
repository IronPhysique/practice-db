from flask import Blueprint, jsonify, redirect
from app.models import db, User
from itsdangerous import URLSafeTimedSerializer, SignatureExpired

verify_email = Blueprint('verify_email', __name__)

# Serializer for decoding tokens
serializer = URLSafeTimedSerializer("your-secret-key")

@verify_email.route('/verify-email/<token>', methods=['GET'])
def verify_email(token):
    try:
        email = serializer.loads(token, salt="email-confirmation", max_age=3600)  # 1 hour expiration
    except SignatureExpired:
        return jsonify({"message": "The verification link has expired."}), 400

    user = User.query.filter_by(email=email).first()

    if user:
        user.is_active = True  # Activate user
        db.session.commit()
        return redirect("/login")  # Redirect to login after verification
    else:
        return jsonify({"message": "Invalid verification link."}), 400
