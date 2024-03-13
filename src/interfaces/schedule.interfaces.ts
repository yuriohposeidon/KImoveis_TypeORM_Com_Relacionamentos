import { z } from "zod";
import { scheduleCreateSchema, scheduleReadSchema, scheduleSchema } from "../schemas";
import { Repository } from "typeorm";
import { Schedule } from "../entities";

type ScheduleCreate = z.infer<typeof scheduleCreateSchema>;
type ScheduleReturn = z.infer<typeof scheduleSchema>;
type ScheduleRead = z.infer<typeof scheduleReadSchema>;

type ScheduleRepo = Repository<Schedule>;

export { ScheduleCreate, ScheduleRepo, ScheduleReturn, ScheduleRead };