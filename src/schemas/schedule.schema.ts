import { z } from "zod";
import { realEstateSchema, userReturnSchema } from "./index";

const scheduleSchema = z.object({
  id: z.number().positive(),
  date: z.string(),
  hour: z.string(),
  realEstateId: realEstateSchema,
  userId: userReturnSchema,
});

const scheduleCreateSchema = scheduleSchema
  .omit({
    id: true,
    realEstateId: true,
    userId: true,
  })
  .extend({ realEstateId: z.number() });

const scheduleReadSchema = scheduleCreateSchema.array();

export { scheduleSchema, scheduleCreateSchema, scheduleReadSchema };
