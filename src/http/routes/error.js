// TODO: Implement error handling here returning the right status code and message for the errors
// TODO: Error details for errors with status code 500 should not be shared
// with the callers of the app as this could be a security risk

// TODO: Log the errors
function errorHandler(err, req, res, next) { //eslint-disable-line
  res.status(500);
  res.json({ error: err.message, status: 500 });
}

module.exports = errorHandler;
