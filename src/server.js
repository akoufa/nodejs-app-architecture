require('dotenv').config();
const logger = require('./libs/logger');
const { port } = require('./configuration');
const db = require('./database');
const services = require('./services')(db);
const app = require('./http/app')(services);

app.listen(port, () => {
  logger.info(`Listening on *:${port}`);
});
