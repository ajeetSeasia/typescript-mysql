import { RequestHandler } from "express";

import { Todos } from "../models/todos";
import { User } from "../models/user";

export const createToDo: RequestHandler = async (req, res, next) => {
  var todos = await Todos.create({
    name: "Example Todo",
    description: "This is an example todo.",
  });
  return res
    .status(200)
    .json({ message: "Todo created successfully", data: todos });
};


export const createUser: RequestHandler = async (req, res, next) => {
 try {
  var todos = await User.create({
    name: "Ajeet",
  });
  return res
    .status(200)
    .json({ message: "Todo created successfully", data: todos });
  
 } catch (error) {
  console.log(error);
 }
};

export const getTodoById: RequestHandler = async (req, res, next) => {
  const allTodos: Todos[] = await Todos.findAll({ include: User });
  return res
    .status(200)
    .json({ message: "Todo fetched successfully", data: allTodos });
};
