// Has the database as a dependency
function create({ User }) {
  async function getAllUsers() {
    const users = await User.findAll();
    return users.map(user => user.toUserModel());
  }

  async function createUser(user) {
    // TODO: catch the error here and rethrow an custom error you defined
    await User.build(user).save();
  }

  return {
    createUser,
    getAllUsers,
  };
}

module.exports.create = create;
