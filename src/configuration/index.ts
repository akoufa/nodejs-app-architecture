import dotenv from 'dotenv';

dotenv.config();

/**
 * This module is used to collect all the configuration variables,
 * like the environment vars, in one place so they are not scattered all over the whole codebase
 */
export const config = {
  connectionString: process.env.DATABASE_CONNECTION_STRING,
  port: process.env.PORT || 3000,
};
