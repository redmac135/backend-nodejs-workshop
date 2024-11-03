import express from "express";
import cors from "cors";
import TaskModel from "./db.js";

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log("Request received at:", new Date());
  console.log("Request method:", req.method);
  console.log("Request URL:", req.url);
  console.log("Request body:", req.body ?? "No body");
  console.log("");
  next();
});

app.get("/tasks", async (req, res) => {
  const tasks = await TaskModel.find();
  res.status(200).json(tasks);
});

app.post("/tasks", async (req, res) => {
  const task = req.body;
  await TaskModel.create(task);
  res.status(201).json(task);
});

app.delete("/tasks/:id", async (req, res) => {
  const id = req.params.id;
  const exists = await TaskModel.exists({ id: id });
  if (exists) {
    await TaskModel.deleteOne({ id: id });
    res.status(200).json({ message: "Task deleted successfully" });
  } else {
    res.status(404).json({ message: "Task not found" });
  }
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`Server is running at http://localhost:${PORT}/`);
  } else {
    console.log("Error:", error);
  }
});
