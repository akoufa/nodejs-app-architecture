const logger = require('./libs/logger');
const services = require('./services');
const app = require('./http/app')(services);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  logger.info(`Listening on *:${port}`);
});
