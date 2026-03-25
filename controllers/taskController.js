export const getAllTasks = (req, res) => {
  res.send("Get all tasks");
};

export const createTask = (req, res) => {
    console.log(req.body);
    res.send("Task created successfully");
};