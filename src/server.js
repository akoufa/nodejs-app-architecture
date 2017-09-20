require('dotenv').config();
const logger = require('./libs/logger');
const { port } = require('./configuration');
const db = require('./database');
const services = require('./services')(db);
const app = require('./http/app')(services);
const signalsFactory = require('./signals');

const server = app.listen(port, () => {
  logger.info(`Listening on *:${port}`);
});

const signals = signalsFactory.create(server, db);
process.on('SIGINT', () => signals.shutdown());
process.on('SIGTERM', () => signals.shutdown());
