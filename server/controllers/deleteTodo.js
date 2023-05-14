import Todo from "../model/todo";

export const deleteTodo = async (req, res) => {
  try {
    // const { id } = req.params;
    const data = await Todo.findByIdAndDelete(req.params.id);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};











// export const deleteTodo = async (request, response) => {
//   try {
//       const todo = await Todo.findByIdAndDelete(request.params.id)

//       return response.status(200).json(todo);
//   } catch (error) {
//       return response.status(500).json(error.message);
//   }
// }