const express = require('express');
const bodyParser = require('body-parser');
const userRoute = require('./routes/user');
const errorRoute = require('./routes/error');

const app = express();
app.use(bodyParser.json());

module.exports = services => {
  const user = userRoute.create(services);
  app.use('/users', user);
  app.use(errorRoute);
  return app;
};
