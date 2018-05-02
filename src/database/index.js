const Sequelize = require('sequelize');
const { connectionString } = require('../configuration');

const sequelize = new Sequelize(connectionString, {
  dialect: 'postgres',
});

const User = require('./entities/User')(sequelize);

sequelize.sync();

// TODO: Specify your models here
module.exports = {
  User,
  sync: sequelize.sync.bind(this),
  close: () => sequelize.connectionManager.close(),
};
