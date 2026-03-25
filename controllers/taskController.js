let tasks = [];

export const getAllTasks = (req, res) => {
  res.json(tasks);
};

export const createTask = (req, res) => {
  const newTask = req.body;

  tasks.push(newTask);

  res.status(201).json({
    message: "Task created successfully",
    task: newTask
  });
};