import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  todo: {
    type: String,
    isComplete: Boolean,
  },
});

const Todo = mongoose.model("Todos", todoSchema);
export default Todo;
