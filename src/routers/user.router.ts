import { Router } from "express";
import middlewares from "../middlewares";
import { userCreateSchema, userUpdateSchema } from "../schemas";
import { userControllers } from "../controllers";

export const userRouter: Router = Router();

userRouter.post(
  "",
  middlewares.validateBody(userCreateSchema),
  middlewares.uniqueEmail,
  userControllers.create
);
userRouter.get("", middlewares.verifyToken, middlewares.verifyAdminOrUser, userControllers.read);

userRouter.use("/:id", middlewares.idExists);

userRouter.patch(
  "/:id",
  middlewares.verifyToken,
  middlewares.verifyAdminOrUser,
  middlewares.validateBody(userUpdateSchema),
  userControllers.partialUpdate
);

userRouter.delete(
  "/:id",
  middlewares.verifyToken,
  middlewares.verifyAdminOrUser,
  userControllers.destroy
);
