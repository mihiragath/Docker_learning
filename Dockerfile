# Base Image
FROM node:20-alpine3.18

# set the working directory
# This is where the application code will be copied to in the container
WORKDIR /app
COPY package.json .
COPY package-lock.json .

# Install dependencies
# This will install the dependencies defined in package.json
RUN npm install

# Copy the rest of the application code
# This will copy all files from the current directory to the /app directory in the container
COPY . .

# Expose the port the app runs on
# This is the port that the application will listen on
CMD [ "npm", "start" ]