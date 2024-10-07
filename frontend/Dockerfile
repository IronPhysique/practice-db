# Use the official Node.js image
FROM node:14

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package.json /app/
RUN npm install

# Copy the rest of the code
COPY . /app

# Build the app
RUN npm run build

# Serve the app
CMD ["npm", "start"]

EXPOSE 3000
