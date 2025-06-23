# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or npm-shrinkwrap.json) to the container
COPY package*.json ./


# Install dependencies with legacy peer deps
RUN npm install --production --legacy-peer-deps

# Copy the rest of the application code to the container
COPY . .

# Build the Next.js app for production
RUN npm run build

# Expose the port that Next.js will run on
EXPOSE 50001

# Define the command to run the Next.js application in production
CMD ["npm", "run", "dev"]

