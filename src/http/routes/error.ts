// TODO: Implement error handling here returning the right status code and message for the errors
// TODO: Error details for errors with status code 500 should not be shared
// with the callers of the app as this could be a security risk

// TODO: Log the errors

// @ts-ignore
export function errorHandler(err: Error, req: any, res: any, next: any) {
  res.status(500);
  res.json({ error: err.message, status: 500 });
}
