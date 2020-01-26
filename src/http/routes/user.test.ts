// eslint-disable-next-line import/no-extraneous-dependencies
import request from 'supertest';
import { appFactory } from '../app';
import { UsersService } from '../../domain/users/usersService';

const userData = [
  { name: 'Alex', age: 30 },
  { name: 'Aris', age: 29 },
  { name: 'Pantelis', age: 40 },
];

const mockUserRepository = {
  getAll: jest.fn(),
  add: jest.fn(),
};

const userService = new UsersService(mockUserRepository);

const app = appFactory(userService);

describe('user route test', () => {
  describe('GET /users test', () => {
    beforeEach(() => {
      mockUserRepository.getAll.mockClear();
      mockUserRepository.add.mockClear();
    });

    it('should return 200 an array of users', async () => {
      mockUserRepository.getAll.mockResolvedValue(userData);

      const { body: users } = await request(app)
        .get('/users')
        .expect(200);

      expect(users).toEqual(userData);
    });

    it('should return 500 when the service rejects with an error', () => {
      const dbError = new Error('Database error');
      mockUserRepository.getAll.mockRejectedValue(dbError);
      return request(app)
        .get('/users')
        .expect(500)
        .catch(error => {
          expect(error).toEqual(dbError);
        });
    });
  });
});
