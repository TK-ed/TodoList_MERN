import Todo from "../model/todo.js";

export const getTodo = async (req, res) => {
  try {
    const data = await Todo.find();
    res.status(200).send(data);
  } catch (err) {
    res.status(400).send(err);
  }
};
