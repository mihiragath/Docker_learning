# Base Image
FROM node:20-alpine3.18

# set the working directory
# This is where the application code will be copied to in the container
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json .
# COPY package.json .
# COPY package-lock.json .
 
# Install dependencies
# This will install the dependencies defined in package.json
RUN npm install

# Copy the rest of the application code
# This will copy all files from the current directory to the /app directory in the container
COPY . .

EXPOSE 8000 3000 
# mapping multiple ports easily then manual command docker run -itd -P expressapp
# also provide range between ports like 8000-9000


# Expose the port the app runs on
# This is the port that the application will listen on
CMD [ "npm", "start" ]

# to built docker image
# This command builds the Docker image using the Dockerfile in the current directory
# docker build -t my-node-app .

# to run container on out machine we muct be doing port mapping 
# docker run -itd -p machine_port:container_post app_name
# ex:= docker run -itd -p 3000:8000 expressapp