import { Request, Response, NextFunction } from 'express';
/**
 *
 * @param {function} fn
 */
export function asyncWrapper(fn: (req: Request, res: Response) => any) {
  return async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      await fn(req, res);
      return;
    } catch (err) {
      next(err);
    }
  };
}
