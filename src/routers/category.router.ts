import { Router } from "express";
import { categoryCreateSchema } from "../schemas";
import middlewares from "../middlewares";
import categoryControllers from "../controllers/category.controllers";

export const categoryRouter: Router = Router();

categoryRouter.post(
  "",
  middlewares.verifyToken,
  middlewares.verifyAdmin,
  middlewares.validateBody(categoryCreateSchema),
  middlewares.uniqueCategory,
  categoryControllers.create
);
categoryRouter.get("", middlewares.idExists, categoryControllers.read);
categoryRouter.get("/:id/realEstate");
