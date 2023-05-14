import express from "express";
import { createTodo } from "../controllers/createTodo.js";
import { getTodo } from "../controllers/getTodo.js";
import { updateTodo } from "../controllers/updateTodo.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send(`Workin'`);
});

// getting all todos
router.get("/todos", getTodo);

// creating todo
router.post("/create", createTodo);

// updating todo
router.put("/update:id", updateTodo);

// deleting todo
router.delete("/delete:id", async (req, res) => {
  try {
    // const { _id } = req.params;
    const data = await Todo.findByIdAndDelete(req.params.id);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
