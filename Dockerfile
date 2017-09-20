FROM node:alpine

# Run the image as a non-root user
Run adduser -S nodejs
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
CMD ["node", "--optimize_for_size", "--max_old_space_size=460", "--gc_interval=100", "./dist/server.js"]