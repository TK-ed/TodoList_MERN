import Todo from "../model/todo.js";

export const updateTodo = async (req, res) => {
  try {
    const { _id } = req.params;
    const { todo } = req.body;
    const data = await Todo.findByIdAndUpdate( _id, { todo: todo});
    if(!data) {
      res.send(errorMessage)
      return
    }
    res.status(200).send(data);
  } catch (err) {
    res.send(err);
  }
};

