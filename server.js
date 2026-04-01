import dotenv from "dotenv";
dotenv.config();
import express from "express";
import taskRoutes from "./routes/taskRoutes.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/errorHandler.js";
import authRoutes from "./routes/authRoutes.js";


const app = express();
app.use(logger);
app.use(express.json());
app.use("/",taskRoutes);
app.use("/api/auth", authRoutes);
app.get("/", (req, res) => {
  res.send("API is running");
});
// 404 handler
app.use((req, res, next) => {
  res.status(404).json({
    success:false,
    message: "Route not found"
  });
});

app.use(errorHandler);
app.listen(3000, () => {
  console.log("Server running on port 3000");
});