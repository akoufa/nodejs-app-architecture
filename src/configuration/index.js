/**
 * This module is used to collect all the configuration variables,
 * like the environment vars, in one place so they are not scattered all over the whole codebase
 */
const config = {
  connectionString: process.env.DATABASE_CONNECTION_STRING,
  port: process.env.PORT || 5000,
  grace: process.env.GRACE || 1000,
};

module.exports = config;
