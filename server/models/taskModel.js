import mongoose from "mongoose";
const taskSchema = new mongoose.Schema(
  {
    work: {
      type: String,
    },
    start: {
      type: String,
    },
    totaltime: {
      type: String,
    },
    date: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("task", taskSchema);
export default Task;
