import "express-async-errors";
import express, { Application } from "express";
import middlewares from "./middlewares";
import {
  categoryRouter,
  realEstateRouter,
  scheduleRouter,
  sessionRouter,
  userRouter,
} from "./routers";

const app: Application = express();

app.use(express.json());

app.use("/users", userRouter);
app.use("/login", sessionRouter);
app.use("/categories", categoryRouter);
app.use("/realEstate", realEstateRouter);
app.use("/schedules", scheduleRouter);

app.use(middlewares.handleError);

export default app;
