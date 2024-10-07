# Base image
FROM python:3.9-slim

# Set working directory
WORKDIR /app

# Copy requirements and install dependencies
COPY requirements.txt .
RUN pip install -r requirements.txt

# Copy the rest of the application
COPY . /app

# Expose port and start the Flask application
EXPOSE 5000
CMD ["python", "run.py"]
