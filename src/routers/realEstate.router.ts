import { Router } from "express";
import { realEstateControllers } from "../controllers";
import middlewares from "../middlewares";
import { realEstateCreateSchema } from "../schemas";

export const realEstateRouter: Router = Router();

realEstateRouter.post(
  "",
  middlewares.verifyToken,
  middlewares.verifyAdminOrUser,
  middlewares.validateBody(realEstateCreateSchema),
  middlewares.uniqueAddress,
  realEstateControllers.create
);
realEstateRouter.get("", realEstateControllers.read);
