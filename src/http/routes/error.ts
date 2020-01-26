import { Request, Response, NextFunction } from 'express';

// TODO: Implement error handling here returning the right status code and message for the errors
// TODO: Error details for errors with status code 500 should not be shared
// with the callers of the app as this could be a security risk

// TODO: Log the errors

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction,
) {
  res.status(500);
  res.json({ error: err.message, status: 500 });
}
