# Assuming the requirements.txt is in the root of your backend folder

# Use an official Python runtime as a parent image
FROM python:3.9-slim

# Set the working directory
WORKDIR /app

# Copy the current directory contents into the container
COPY . /app

# Install the dependencies from requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Run the application or entrypoint (if required)
CMD ["python", "app.py"]  # Adjust as necessary for your app
