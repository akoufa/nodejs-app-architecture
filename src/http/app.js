const express = require('express');
const userRoute = require('./routes/user');
const errorRoute = require('./routes/error');

const app = express();

module.exports = (services) => {
  const user = userRoute.create(services);
  app.use('/users', user);
  app.use(errorRoute);
  return app;
};
