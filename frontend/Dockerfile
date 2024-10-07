# Base image
FROM node:14

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json /app/
RUN npm install

# Copy the rest of the app
COPY . /app

# Build the app
RUN npm run build

# Serve the app
EXPOSE 3000
CMD ["npm", "start"]
