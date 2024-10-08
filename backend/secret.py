import secrets

jwt_secret_key = secrets.token_hex(32)
print(f"Your secure JWT secret key: {jwt_secret_key}")
