import express from "express";
import { getAllTasks,createTask,getTaskById } from "../controllers/taskController.js";
const router = express.Router();

// GET all tasks
router.get("/tasks",getAllTasks);
// CREATE task
router.post("/tasks",createTask);
router.get("/tasks/:id", getTaskById);
export default router;