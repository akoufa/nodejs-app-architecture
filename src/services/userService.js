const User = require('../models/User');

// Has the database as a dependency
function create(db) { // eslint-disable-line
  async function getAllUsers() {
    // TODO: Add the db call here and map the results to User model
    return [new User('Alex', '20'), new User('Aris', 19), new User('Pantelis', 40)];
  }

  return {
    getAllUsers,
  };
}

module.exports.create = create;
