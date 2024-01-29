import { Sequelize } from "sequelize-typescript";
import { Todos } from "../models/todos";
import { User } from "../models/user";


const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "King#123",
  database: "todos",
  logging: false,
  models: [Todos,User],
});

export default connection;