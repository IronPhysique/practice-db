from flask import Blueprint, request, jsonify
from app.models import db, User  # Assuming you have a User model
from werkzeug.security import generate_password_hash
import uuid
import smtplib  # Email sending
from flask_jwt_extended import create_access_token
from itsdangerous import URLSafeTimedSerializer

signup = Blueprint('signup', __name__)

# Secret key for token generation
serializer = URLSafeTimedSerializer("your-secret-key")

@signup.route('/signup', methods=['POST'])
def signup_user():
    data = request.get_json()
    email = data.get('email')
    username = data.get('username')
    password = data.get('password')

    # Hash the password
    hashed_password = generate_password_hash(password)

    # Create new user (without activation initially)
    new_user = User(email=email, username=username, password=hashed_password, is_active=False, activation_token=str(uuid.uuid4()))
    db.session.add(new_user)
    db.session.commit()

    # Generate email verification token
    token = serializer.dumps(email, salt="email-confirmation")

    # Send verification email
    send_verification_email(email, token)

    return jsonify({"message": "Signup successful! Check your email for verification."}), 200

def send_verification_email(email, token):
    verification_url = f"http://localhost:5000/verify-email/{token}"

    # Simulating sending an email
    print(f"Verification link: {verification_url}")
    # Ideally, here you'd use an email service like SendGrid or SMTP to send the email
