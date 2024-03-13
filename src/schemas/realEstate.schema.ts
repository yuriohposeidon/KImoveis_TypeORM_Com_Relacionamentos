import { z } from "zod";
import { addressCreateSchema, addressSchema, categorySchema, userReturnSchema } from "./index";

const realEstateSchema = z.object({
  id: z.number().positive(),
  sold: z.string().max(45),
  value: z.number().or(z.string()),
  size: z.number().positive(),
  createdAt: z.string(),
  updatedAt: z.string(),
  address: addressCreateSchema,
  categoryId: z.number().positive(),
});

const realEstateCreateSchema = realEstateSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  sold: true,
});

const realEstateReturnSchema = realEstateSchema.extend({
  address: addressSchema.nullish(),
  category: categorySchema,
});

const realEstateReadSchema = realEstateCreateSchema.array();

export { realEstateSchema, realEstateCreateSchema, realEstateReadSchema, realEstateReturnSchema };
