import { addressRepository, categoryRepository, realEstateRepository } from "../Repositories";
import { Address } from "../entities";
import RealEstate from "../entities/realEstate.entity";
import { AppError } from "../errors";
import { RealEstateCreate } from "../interfaces";
import { realEstateReturnSchema } from "../schemas";

const create = async (payload: RealEstateCreate) => {
  const categories = await categoryRepository.findOneBy({ id: payload.categoryId });

  if (!categories) {
    throw new AppError("Category not found", 409);
  }

  const address: Address = addressRepository.create({ ...payload.address });
  await addressRepository.save(address);

  const realEstate: RealEstate = realEstateRepository.create({
    ...payload,
    address: address,
    category: categories,
  });

  await realEstateRepository.save(realEstate);

  return realEstate;
};

const read = async (): Promise<any[]> => {
  const realEstate = await realEstateRepository.find({
    relations: {
      address: true,
    },
  });

  return realEstate;
};

const retrieve = async (recipeId: number): Promise<any> => {
  const realEstates = await realEstateRepository.findOne({
    where: {
      id: recipeId,
    },
    relations: {
      category: true,
      address: true,
    },
  });

  if (!realEstates) throw new AppError("realEstate not found", 404);

  return realEstateReturnSchema.parse(realEstates);
};

export default { create, read, retrieve };
