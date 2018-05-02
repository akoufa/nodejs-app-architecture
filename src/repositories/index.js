// Register all the services here
const userRepositoryFactory = require('./userRepository');

module.exports = db => {
  const userRepository = userRepositoryFactory.create(db);
  return {
    userRepository,
  };
};
