import { realEstateRepository, scheduleRepository, userRepository } from "../Repositories";
import { Schedule } from "../entities";
import { AppError } from "../errors";
import { ScheduleCreate, ScheduleRead } from "../interfaces";
import { scheduleReadSchema } from "../schemas";

const create = async (payload: any, userId: number): Promise<any> => {
  const { realEstateId, ...moreSchedule } = payload;
  const realEstate = await realEstateRepository.findOneBy({ id: realEstateId });
  if (!realEstate) {
    throw new AppError("RealEstate not found", 404);
  }

  const user = await userRepository.findOneBy({ id: userId });
  if (!user) {
    throw new AppError("User not found", 404);
  }

  const existingVisit = await scheduleRepository.findOneBy({
    date: payload.date,
    hour: payload.hour,
    user: {
      id: user.id,
    },
  });
  if (existingVisit) {
    throw new AppError(
      "User schedule to this real estate at this date and time already exists",
      409
    );
  }

  const realEstateVisit = await scheduleRepository.findOneBy({
    date: payload.date,
    hour: payload.hour,
  });
  if (realEstateVisit) {
    throw new AppError("Schedule to this real estate at this date and time already exists", 409);
  }

  const convertDate: Date = new Date(payload.date);
  const convertHour: number = Number(payload.hour.slice(0, -3));
  const convertDay = convertDate.getDay();

  if (convertHour <= 8 || convertHour > 18) {
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);
  }

  if (convertDay === 5 || convertDay === 6) {
    throw new AppError("Invalid date, work days are monday to friday", 400);
  }

  const schedule: Schedule[] = scheduleRepository.create({
    ...payload,
    realEstate,
    user: user!,
  });
  await scheduleRepository.save(schedule);

  return schedule;
};

const read = async (id: number): Promise<ScheduleRead> => {
  return scheduleReadSchema.parse(await scheduleRepository.findOne({where:{realEstate: {id: id}}}));
};

export default { create, read };