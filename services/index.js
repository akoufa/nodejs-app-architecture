// Register all the services here
const userServiceFactory = require('./userService');

// TODO: Set the db dependencies here
const userService = userServiceFactory.create();

module.exports = {
  userService,
};
