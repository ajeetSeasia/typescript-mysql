import { Table, Model, Column, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { User } from "./user";

@Table({
  timestamps: false,
  tableName: "todos",
})
export class Todos extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  name!: string;
  
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  description!: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.NUMBER,
    allowNull: true,
  })
  user_id!: number;

  @BelongsTo(() => User)
  user!: User;
}