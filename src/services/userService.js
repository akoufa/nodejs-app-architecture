// DOMAIN LAYER
// Has the userRepository as a dependency. The UserService does not know
// nor does it care where the user models came from. This is abstracted away
// by the implementation of the repositories. It just calls the needed repositories
// gets the results and usually applies some business logic on them.

function create(userRepository) {
  async function getAllUsers() {
    const users = await userRepository.getAll();
    return users;
  }

  async function createUser(user) {
    // TODO: catch possible errors here and rethrow a custom error you defined instead
    await userRepository.add(user);
  }

  return {
    createUser,
    getAllUsers,
  };
}

module.exports.create = create;
