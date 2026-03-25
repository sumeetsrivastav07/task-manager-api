import express from "express";
import taskRoutes from "./routes/taskRoutes.js";
const app = express();
app.use(express.json());
app.use("/",taskRoutes);
app.get("/", (req, res) => {
  res.send("API is running");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});