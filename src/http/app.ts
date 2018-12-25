import express from 'express';
import bodyParser from 'body-parser';
import { UsersService } from '../domain/users/usersService';
import { errorHandler } from './routes/error';
import { userRoute } from './routes/user';

const app = express();
app.use(bodyParser.json());

export const appFactory = (userService: UsersService) => {
  const user = userRoute(userService);
  app.use('/users', user);
  app.use(errorHandler);
  return app;
};
