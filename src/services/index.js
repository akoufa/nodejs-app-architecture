// Register all the services here
const userServiceFactory = require('./userService');

module.exports = (db) => {
  const userService = userServiceFactory.create(db);
  return ({
    userService,
  });
};
