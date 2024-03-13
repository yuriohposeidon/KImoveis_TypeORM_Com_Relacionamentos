import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./user.entity";
import RealEstate from "./realEstate.entity";

@Entity("schedules")
export default class Schedule {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "date" })
  date: Date;

  @Column({ type: "time" })
  hour: string;

  @ManyToOne(() => RealEstate)
  @JoinColumn({ name: "realEstate" })
  realEstate: RealEstate;

  @ManyToOne(() => User, (u) => u.schedules, { eager: true })
  user: User;
}
