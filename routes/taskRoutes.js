import express from "express";

import {
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask
} from "../controllers/taskController.js";
import validateTask from "../middleware/validateTask.js";
const router=express.Router();
// GET all tasks
router.get("/tasks",getAllTasks);
// CREATE task
router.post("/tasks",validateTask,createTask);
router.get("/tasks/:id",getTaskById);
router.put("/tasks/:id",validateTask, updateTask);
router.delete("/tasks/:id", deleteTask);
export default router;