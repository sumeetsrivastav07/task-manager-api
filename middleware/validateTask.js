const validateTask = (req, res, next) => {
  const { title, completed } = req.body;

  // For title validation if title is provided
  if (title !== undefined && title.trim() === "") {
    return res.status(400).json({
      message: "Title cannot be empty"
    });
  }

  // For POST request, title is required
  if (req.method === "POST" && (!title || title.trim() === "")) {
    return res.status(400).json({
      message: "Title is required"
    });
  }

  // Trim title if present
  if (title !== undefined) {
    req.body.title = title.trim();
  }

  // Validate completed if provided
  if (completed !== undefined && typeof completed !== "boolean") {
    return res.status(400).json({
      message: "Completed must be true or false"
    });
  }

  next();
};

export default validateTask;