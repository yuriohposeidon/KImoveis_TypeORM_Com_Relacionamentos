import { Request, Response } from "express";
import { scheduleServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
  await scheduleServices.create(req.body, res.locals.decoded.sub);
  return res.status(201).json({ message: "Schedule created" });
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const schedule = await scheduleServices.read(Number(req.params.id));

  return res.status(200).json(schedule);
};

export default { create, read };
