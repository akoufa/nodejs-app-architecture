const Sequelize = require('sequelize');
const UserModel = require('../../models/User');

module.exports = sequelize => {
  const User = sequelize.define('user', {
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    age: {
      type: Sequelize.INTEGER,
      validate: { min: 0 },
    },
  });

  // Map to application model so we don't have tight coupling
  // throughout the app with the db implemenation
  User.prototype.toUserModel = function toUserModel() {
    const name = `${this.firstName} ${this.lastName}`;
    return new UserModel(name, this.age);
  };

  return User;
};
