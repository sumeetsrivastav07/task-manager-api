const validateTask = (req, res, next) => {
  const { title, completed } = req.body;

  if (title !== undefined && title.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Title cannot be empty"
    });
  }

  if (req.method === "POST" && (!title || title.trim() === "")) {
    return res.status(400).json({
      success: false,
      message: "Title is required"
    });
  }

  if (title !== undefined) {
    req.body.title = title.trim();
  }

  if (completed !== undefined && typeof completed !== "boolean") {
    return res.status(400).json({
      success: false,
      message: "Completed must be true or false"
    });
  }

  next();
};

export default validateTask;