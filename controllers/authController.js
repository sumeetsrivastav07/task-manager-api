export const signupUser = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Signup route working"
  });
};

export const loginUser = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Login route working"
  });
};