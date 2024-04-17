import mongoose from "mongoose";
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
 
  
});

const Task = new model("Task", TaskSchema);
export default Task;
