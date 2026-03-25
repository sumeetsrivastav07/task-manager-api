import express from "express";

const router = express.Router();

// GET all tasks
router.get("/tasks", (req, res) => {
  res.send("Get all tasks");
});

// CREATE task
router.post("/tasks", (req, res) => {
  res.send("Create a task");
});

export default router;