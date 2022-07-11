import { Request, Response } from 'express';

export function globalMiddleware(
  req: Request,
  res: Response,
  next: () => void,
) {
  console.log('[globalMiddleware] Start');
  console.log(`[globalMiddleware] Request: ${req.method} ${req.path}`);

  next();

  console.log('[globalMiddleware] End');
}
