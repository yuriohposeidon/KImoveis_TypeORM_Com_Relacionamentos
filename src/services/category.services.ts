import { categoryRepository } from "../Repositories";
import { Category } from "../entities";
import { CategoryCreate, CategoryRead } from "../interfaces";
import { categoryReadSchema } from "../schemas";

const create = async (payload: CategoryCreate): Promise<Category> => {
  const category: Category = categoryRepository.create(payload);
  await categoryRepository.save(category);

  return category;
};

const read = async (): Promise<CategoryRead> => {
  return categoryReadSchema.parse(await categoryRepository.find());
};

export default { create, read };
