import express from 'express';
import bodyParser from 'body-parser';
import { UserService } from '../services/userService';
import { errorHandler } from './routes/error';
import { userRoute } from './routes/user';

const app = express();
app.use(bodyParser.json());

export const appFactory = (userService: UserService) => {
  const user = userRoute(userService);
  app.use('/users', user);
  app.use(errorHandler);
  return app;
};
