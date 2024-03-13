import { Router } from "express";
import { scheduleControllers } from "../controllers";
import middlewares from "../middlewares";
import { validateBody } from "../middlewares/validateBody.middleware";
import { scheduleCreateSchema, scheduleSchema } from "../schemas";

export const scheduleRouter: Router = Router();

scheduleRouter.post(
  "",
  middlewares.verifyToken,
  validateBody(scheduleCreateSchema),
  scheduleControllers.create
);
scheduleRouter.get("/realEstate/:id", middlewares.verifyToken, middlewares.verifyAdminOrUser, scheduleControllers.read);
