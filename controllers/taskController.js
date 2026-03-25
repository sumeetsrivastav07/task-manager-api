let tasks = [];
let currentId = 1;

export const getAllTasks = (req, res) => {
  res.json(tasks);
};

export const createTask = (req, res) => {
  const newTask = {
    id: currentId++,
    title: req.body.title
  };

  tasks.push(newTask);

  res.status(201).json({
    message: "Task created successfully",
    task: newTask
  });
};

export const getTaskById = (req, res) => {
  const taskId = Number(req.params.id);

  const task = tasks.find((task) => task.id === taskId);

  if (!task) {
    return res.status(404).json({
      message: "Task not found"
    });
  }

  res.json(task);
};