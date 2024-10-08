# Use an official Python runtime as a parent image
FROM python:3.9-slim

# Set the working directory inside the container
WORKDIR /app

# Copy all files from the current directory to /app in the container
COPY . /app

# Set PYTHONPATH to ensure that the app module can be found
ENV PYTHONPATH="/app"

# Install the dependencies from requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 5000
CMD ["python", "run.py"]  # Or the appropriate entry point for your app
