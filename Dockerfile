FROM node:alpine

# Run the image as a non-root user
RUN adduser -S nodejs
USER nodejs

# Create app directory
RUN mkdir -p /home/nodejs/src
WORKDIR /home/nodejs/src

# Install app dependencies
COPY package.json /home/nodejs/src
RUN npm install

# Bundle app source
COPY . /home/nodejs/src

# Build app for production
RUN npm run build

# Start the app
CMD ["npm", "start"]