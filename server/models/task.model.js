import { Schema, model } from "mongoose";

const TaskSchema = new Schema({
  title: {
    type: String,
    required: [true, "Please provide a movie name"],
  },
  description: {
    type: String,
  },
  task: {
    type: String,
  }
}, {
  timestamps: true // Automatically add createdAt and updatedAt fields
});

const Task = model("Task", TaskSchema);
export default Task;
