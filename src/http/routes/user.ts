import express, { Request, Response } from 'express';
import { asyncWrapper } from '../utils/asyncWrapper';
import { UsersService } from '../../domain/users/usersService';

const router = express.Router();

export function userRoute(userService: UsersService) {
  router.get(
    '/',
    asyncWrapper(async (_: Request, res: Response) => {
      const users = await userService.getAllUsers();
      res.json(users);
    }),
  );

  // TODO: Install middleware to validate the input
  router.post(
    '/',
    asyncWrapper(async (req: Request, res: Response) => {
      const { firstName, lastName, age } = req.body;
      const user = await userService.createUser(firstName, lastName, age);
      res.json(user);
    }),
  );

  return router;
}
