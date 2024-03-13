import { z } from "zod";
import { realEstateCreateSchema, realEstateReadSchema, realEstateSchema } from "../schemas";
import { Repository } from "typeorm";
import { RealEstate } from "../entities";

type RealEstateCreate = z.infer<typeof realEstateCreateSchema>;
type RealEstateReturn = z.infer<typeof realEstateSchema>;
type RealEstateRead = z.infer<typeof realEstateReadSchema>;

type RealEstateRepo = Repository<RealEstate>;

export { RealEstateCreate, RealEstateRepo, RealEstateReturn, RealEstateRead };
