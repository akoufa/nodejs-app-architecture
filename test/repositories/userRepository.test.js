const expect = require('chai').expect;
const sinon = require('sinon');
const Sequelize = require('sequelize');
const UserModel = require('../../src/models/User');

// Just instantiate sequelize without a connection string
const sequelize = new Sequelize({ dialect: 'postgres' });

const User = require('../../src/database/entities/User')(sequelize);

const db = { User };

const { userRepository } = require('../../src/repositories')(db);

function createDbUsers() {
  const pantelis = User.build({ firstName: 'Pantelis', lastName: 'Pappous', age: 40 });
  const aris = User.build({ firstName: 'Aris', lastName: 'Autias', age: 28 });
  return [pantelis, aris];
}

function createAppModelUsers() {
  const pantelis = new UserModel('Pantelis Pappous', 40);
  const aris = new UserModel('Aris Autias', 28);
  return [pantelis, aris];
}

describe('user service test', function () {
  beforeEach(() => {
    sinon.stub(User, 'findAll');
  });

  afterEach(() => {
    User.findAll.restore();
  });

  it('should call the db and map the result to user models', async function () {
    User.findAll.resolves(createDbUsers());
    const users = await userRepository.getAll();
    expect(users).to.have.lengthOf(2);
    expect(users).to.eql(createAppModelUsers());
  });
});

