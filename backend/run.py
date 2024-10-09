from app import create_app, db
from flask import send_from_directory
import os

app = create_app()

# Serve React frontend files from the build directory
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_react(path):
    """
    Serve the React app. If a file is requested that doesn't exist, serve the index.html.
    This allows React Router to handle the routing on the frontend.
    """
    if path != "" and os.path.exists(f"frontend/build/{path}"):
        return send_from_directory('frontend/build', path)
    else:
        return send_from_directory('frontend/build', 'index.html')

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(host="0.0.0.0", port=5000)
