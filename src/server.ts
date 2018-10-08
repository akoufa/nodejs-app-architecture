import dotenv from 'dotenv';
dotenv.config();

import { config } from './configuration';
import { Database } from './database';
import { appFactory } from './http/app';
import { logger } from './libs/logger';
import { UserRepository } from './repositories/userRepository';
import { UserService } from './services/userService';
import { init } from './signals';

const database = new Database(config.connectionString as string);
database.connect();
const userRepository = new UserRepository();
const userService = new UserService(userRepository);

const app = appFactory(userService);

const server = app.listen(config.port, () => {
  logger.info(`Listening on *:${config.port}`);
});

const shutdown = init(async () => {
  await database.disconnect();
  await server.close();
});

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
