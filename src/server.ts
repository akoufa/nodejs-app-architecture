import { config } from './configuration';
import { appFactory } from './http/app';
import { logger } from './libs/logger';
import { UserRepository } from './data/users/userRepository';
import { UsersService } from './domain/users/usersService';
import { init } from './signals';
import { Database } from './data/database';

const database = new Database(config.connectionString as string);
database.connect();
const userRepository = new UserRepository();
const userService = new UsersService(userRepository);

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
