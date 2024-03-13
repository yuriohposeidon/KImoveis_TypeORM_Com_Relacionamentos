import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

export const verifyAdminOrUser = (req: Request, res: Response, next: NextFunction): void => {
  const { sub, admin } = res.locals.decoded;
  const userId = req.params.id;
  if (!admin && userId != sub) throw new AppError("Insufficient permission", 403);

  return next();
};
