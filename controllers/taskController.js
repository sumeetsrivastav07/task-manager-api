let tasks = [];
let currentId = 1;

export const getAllTasks = (req, res) => {
  res.json(tasks);
};

export const createTask = (req, res) => {
    
  const newTask = {
    id: currentId++,
    title: req.body.title,
    completed:false
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
export const updateTask = (req, res) => {
  const taskId = Number(req.params.id);

  const task = tasks.find((task) => task.id === taskId);

  if (!task) {
    return res.status(404).json({
      message: "Task not found"
    });
  }

  const { title, completed } = req.body;

  if (title !== undefined) {
    task.title = title;
  }

  if (completed !== undefined) {
    task.completed = completed;
  }

  res.json({
    message: "Task updated successfully",
    task: task
  });
};
export const deleteTask = (req, res) => {
  const taskId = Number(req.params.id);

  const taskIndex = tasks.findIndex((task) => task.id === taskId);

  if (taskIndex === -1) {
    return res.status(404).json({
      message: "Task not found"
    });
  }

  const deletedTask = tasks.splice(taskIndex, 1);

  res.json({
    message: "Task deleted successfully",
    task: deletedTask[0]
  });
};