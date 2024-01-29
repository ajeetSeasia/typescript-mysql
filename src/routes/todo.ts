import { Router } from "express";

import {
  createToDo,
  createUser,
//   deleteToDo,
//   getAllToDo,
//   updateTodo,
  getTodoById,
} from "../controllers/todos";

const router = Router();

router.post("/", createToDo);

router.post("/user", createUser);

router.get("/", getTodoById);

// router.put("/:id", updateTodo);

// router.delete("/:id", deleteToDo);

export default router;