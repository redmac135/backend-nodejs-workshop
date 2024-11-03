import express from "express";
import cors from "cors";

const app = express();
const PORT = 4000;

let tasks = [];

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

app.get("/tasks", (req, res) => {
  res.status(200).json(tasks);
});

app.post("/tasks", (req, res) => {
  const task = req.body;
  tasks.push(task);
  res.status(201).json(task);
});

app.delete("/tasks/:id", (req, res) => {
  const id = req.params.id;
  const index = tasks.findIndex((task) => task.id == id);
  console.log(id);
  if (index !== -1) {
    tasks.splice(index, 1);
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
