import { UserCreate, UserRead, UserReturn, UserUpdate } from "../interfaces";
import { User } from "../entities";
import { userCreateSchema, userReadSchema, userReturnSchema } from "../schemas";
import { userRepository } from "../Repositories";

const create = async (payload: UserCreate): Promise<UserReturn> => {
  const user: User = userRepository.create(payload);
  await userRepository.save(user);

  return userReturnSchema.parse(user);
};

const read = async (): Promise<UserRead> => {
  return userReadSchema.parse(await userRepository.find());
};

const partialUpdate = async (user: User, payload: UserUpdate): Promise<UserReturn> => {
  const userUpdate: User = userRepository.create({ ...user, ...payload });

  await userRepository.save(userUpdate);

  const validateUser = userReturnSchema.parse(userUpdate);

  return validateUser;
};

const destroy = async (user: User): Promise<void> => {
  await userRepository.softRemove(user);
};

export default { create, read, partialUpdate, destroy };
