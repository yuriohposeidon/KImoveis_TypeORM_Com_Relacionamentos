import { Request, Response } from "express";
import { realEstateServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
  const realEstate = await realEstateServices.create(req.body);

  return res.status(201).json(realEstate);
};
const read = async (req: Request, res: Response): Promise<Response> => {
  const realEstate = await realEstateServices.read();
  return res.status(200).json(realEstate);
};

const retrieve = async (req: Request, res: Response): Promise<Response> => {
  const id: number = Number(req.params.id);
  const realEstate = await realEstateServices.retrieve(id);

  return res.status(201).json(realEstate);
};

export default { create, read, retrieve };
