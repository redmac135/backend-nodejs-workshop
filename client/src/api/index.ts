import { Task } from "../types";

const PORT = 4000;

async function getTasks(): Promise<Task[]> {
  return await fetch(`http://localhost:${PORT}/tasks`).then((response) =>
    response.json(),
  );
}

async function addTask(task: Task): Promise<Task> {
  return await fetch(`http://localhost:${PORT}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  }).then((response) => response.json());
}

async function deleteTask(id: number): Promise<void> {
  await fetch(`http://localhost:${PORT}/tasks/${id}`, {
    method: "DELETE",
  });
}

const api = { getTasks, addTask, deleteTask };

export default api;
