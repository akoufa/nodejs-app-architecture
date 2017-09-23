const request = require('supertest');
const expect = require('chai').expect;
const sinon = require('sinon');

const repositories = sinon.stub();
const services = require('../../src/services')(repositories);

const userService = services.userService;

const app = require('../../src/http/app')(services);

const userData = require('../data/user').users;

describe('user route test', function () {
  describe('GET /users test', function () {
    beforeEach(() => {
      sinon.stub(userService, 'getAllUsers');
    });

    afterEach(() => {
      userService.getAllUsers.restore();
    });

    it('should return 200 an array of users', async function () {
      userService.getAllUsers.resolves(userData);

      const { body: users } = await request(app)
        .get('/users')
        .expect(200);

      expect(users).to.eql(userData);
    });

    it('should return 500 when the service rejects with an error', function () {
      const dbError = new Error('Database error');
      userService.getAllUsers.rejects(dbError);

      return request(app)
        .get('/users')
        .expect(500)
        .catch((error) => {
          expect(error).to.be.equal(dbError);
        });
    });
  });
});
