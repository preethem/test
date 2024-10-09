# Use Node.js image to build the React app
FROM node:14 as build

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the React code
COPY . .

# Build the React app for production
RUN npm run build

# Use a lightweight server to serve the app
FROM nginx:alpine

# Copy the build files to the nginx directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port that nginx runs on
EXPOSE 80

# Command to run nginx server
CMD ["nginx", "-g", "daemon off;"]
