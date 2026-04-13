import dotenv from "dotenv";
dotenv.config();

import express from "express";
import taskRoutes from "./routes/taskRoutes.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/errorHandler.js";
import authRoutes from "./routes/authRoutes.js";
import { connectDB } from "./config/db.js"; 
const app = express();

// middleware
app.use(logger);
app.use(express.json());

// routes
app.use("/", taskRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("API is running");
});

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

app.use(errorHandler);

const startServer = async () => {
  await connectDB(); 

  app.listen(3000, () => {
    console.log("🚀 Server running on port 3000");
  });
};

startServer();