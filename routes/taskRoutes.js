import express from "express";

import {
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask
} from "../controllers/taskController.js";
import validateTask from "../middleware/validateTask.js";
import { protect } from "../middleware/authMiddleware.js";
const router=express.Router();
// GET all tasks
router.get("/tasks",protect,getAllTasks);
// CREATE task
router.post("/tasks",protect,validateTask,createTask);
router.get("/tasks/:id",protect,getTaskById);
router.put("/tasks/:id",protect,validateTask, updateTask);
router.delete("/tasks/:id", protect,deleteTask);
export default router;