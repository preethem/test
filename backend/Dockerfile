# Use official Python image from DockerHub
FROM python:3.9-slim

# Set the working directory
WORKDIR /app

# Install dependencies
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

# Copy the rest of the application code
COPY . .

# Expose the port that Flask runs on
EXPOSE 5000

# Command to run the Flask app
CMD ["gunicorn", "-b", "0.0.0.0:5000", "app:app"]
