import mongoose from "mongoose";

const uri = "redacted";

async function connect() {
  await mongoose.connect(uri);
}

connect().catch(console.error);

const taskSchema = new mongoose.Schema({
  id: Number,
  text: String,
});

const TaskModel = mongoose.model("Task", taskSchema);

export default TaskModel;
