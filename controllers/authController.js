let users = [];

export const signupUser = (req, res) => {
  const { name, email, password } = req.body;

  // Check required fields
  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "Name, email and password are required"
    });
  }

  // Check if user already exists
  const existingUser = users.find((user) => user.email === email);

  if (existingUser) {
    return res.status(400).json({
      success: false,
      message: "User already exists"
    });
  }

  // Create new user
  const newUser = {
    id: users.length + 1,
    name,
    email,
    password
  };

  users.push(newUser);

  res.status(201).json({
    success: true,
    message: "User registered successfully",
    data: {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email
    }
  });
};
export const loginUser = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Login route working"
  });
};