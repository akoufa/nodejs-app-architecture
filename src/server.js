require('dotenv').config();
const logger = require('./libs/logger');
const { port } = require('./configuration');
const db = require('./database');
const services = require('./services')(db);
const app = require('./http/app')(services);
const signals = require('./signals');

const server = app.listen(port, () => {
  logger.info(`Listening on *:${port}`);
});

const shutdown = signals.init(async () => {
  await db.close();
  await server.close();
});

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
