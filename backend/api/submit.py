@routes.route('/api/submit', methods=['POST'])
@jwt_required()  # Make sure only authenticated users can submit
def submit_data():
    data = request.get_json()

    if data['type'] == 'starter':
        # Logic to handle new starter
        pass
    elif data['type'] == 'leaver':
        # Logic to handle new leaver
        pass

    return jsonify({"message": "Data submitted successfully!"}), 200
