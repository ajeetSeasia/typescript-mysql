import { Table, Model, Column, DataType, HasMany } from "sequelize-typescript";
import { Todos } from "./todos";

@Table({
  timestamps: false,
  tableName: "users",
})
export class User extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  name!: string;

  @HasMany(() => Todos)
  todos!: Todos[];
}