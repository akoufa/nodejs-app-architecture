// DATA LAYER
// UserRepository:
// is used to provide an abstraction on top of the database ( and possible other data sources)
// so other parts of the application are decoupled from the specific database implementation.
// Furthermore it can hide the origin of the data from it's consumers.
// It is possible to fetch the entities from different sources like inmemory cache,
// network or the db without the need to alter the consumers code.

function create({ User }) {
  async function getAll() {
    const users = await User.findAll();
    return users.map(user => user.toUserModel());
  }

  async function add(user) {
    await User.build(user).save();
  }

  return {
    add,
    getAll,
  };
}

module.exports.create = create;
