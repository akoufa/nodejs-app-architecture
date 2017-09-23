const expect = require('chai').expect;
const sinon = require('sinon');
const User = require('../../src/models/User');
const userRepositoryFactory = require('../../src/repositories/userRepository');
const userServiceFactory = require('../../src/services/userService');

const db = sinon.stub();
const userRepository = userRepositoryFactory.create(db);
const userService = userServiceFactory.create(userRepository);

function createUsers() {
  const pantelis = new User('Pantelis Pappous', 40);
  const aris = new User('Aris Autias', 28);
  return [pantelis, aris];
}

describe('user service test', function () {
  beforeEach(() => {
    sinon.stub(userRepository, 'getAll');
  });

  afterEach(() => {
    userRepository.getAll.restore();
  });

  it('should call the repository to fetch the users', async function () {
    userRepository.getAll.resolves(createUsers());
    const users = await userService.getAllUsers();
    expect(users).to.have.lengthOf(2);
    expect(users).to.eql(createUsers());
  });
});

