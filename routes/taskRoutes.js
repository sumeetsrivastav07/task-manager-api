import express from "express";
import { getAllTasks,createTask } from "../controllers/taskController.js";
const router = express.Router();

// GET all tasks
router.get("/tasks",getAllTasks);
// CREATE task
router.post("/tasks",createTask);

export default router;