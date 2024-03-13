import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("categories")
export default class Category {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 45, unique: true })
  name: string;
}
