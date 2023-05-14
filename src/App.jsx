import React from "react";
import { useState, useEffect } from "react";
import AddTodo from "./components/todolist/addTodo";
import Todoform from "./components/todoform/todoform";

function App() {
  return (
    <div>
      <Todoform />
      {/* <AddTodo /> */}
    </div>
  );
}

export default App;
