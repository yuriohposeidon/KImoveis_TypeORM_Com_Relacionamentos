import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { Address } from "../entities";
import { addressRepository } from "../Repositories";

export const uniqueAddress = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const street: string = req.body.street;

  const foundEntity: Address | null = await addressRepository.findOneBy({ street });
  if (foundEntity) throw new AppError("Address already exists", 409);

  return next();
};
