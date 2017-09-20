const process = require('process');
const { grace } = require('../configuration');

function create(server, db) {
  async function shutdown() {
    setTimeout(() => process.exit(0), grace + 1000);

    try {
      await server.close();
      await db.close();
      process.exit(0);
    } catch (err) {
      process.exit(1);
    }
  }

  return {
    shutdown,
  };
}

module.exports.create = create;
