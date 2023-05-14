import Todo from "../model/todo.js";

export const createTodo = async (req, res) => {
  try {
    const { todo } = req.body;

    const newTodo = new Todo({
      todo: todo,
    });
    newTodo.save();

    res.status(201).send(newTodo);
  } catch (error) {
    res.send(error);
  }
};
