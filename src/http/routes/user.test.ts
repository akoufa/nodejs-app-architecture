import request from 'supertest';
import { appFactory } from '../../http/app';
import { UsersService } from '../../domain/users/usersService';
import { UserRepository } from '../../data/users/userRepository';

const mockGetAll = jest.fn();
const mockAdd = jest.fn();

jest.mock('../../data/users/userRepository.ts', () => ({
  UserRepository: jest.fn().mockImplementation(() => {
    return {
      getAll: mockGetAll,
      add: mockAdd,
    };
  }),
}));

const userData = [
  { name: 'Alex', age: 30 },
  { name: 'Aris', age: 29 },
  { name: 'Pantelis', age: 40 },
];

const userRepository = new UserRepository();
const userService = new UsersService(userRepository);

const app = appFactory(userService);

describe('user route test', () => {
  describe('GET /users test', () => {
    beforeEach(() => {
      (UserRepository as any).mockClear();
      mockGetAll.mockClear();
      mockAdd.mockClear();
    });

    it('should return 200 an array of users', async () => {
      mockGetAll.mockResolvedValue(userData);

      const { body: users } = await request(app)
        .get('/users')
        .expect(200);

      expect(users).toEqual(userData);
    });

    it('should return 500 when the service rejects with an error', () => {
      const dbError = new Error('Database error');
      mockGetAll.mockRejectedValue(dbError);
      return request(app)
        .get('/users')
        .expect(500)
        .catch(error => {
          expect(error).toEqual(dbError);
        });
    });
  });
});
