from flask import Flask, jsonify, request

app = Flask(__name__)

# Simple route
@app.route('/')
def home():
    return jsonify(message="Welcome to the Starter/Leaver Web App")

# Example API route for starters
@app.route('/api/starter', methods=['POST'])
def create_starter():
    data = request.json
    # Logic to handle starter submission
    return jsonify(message="Starter created", data=data), 201

if __name__ == '__main__':
    app.run(debug=True)