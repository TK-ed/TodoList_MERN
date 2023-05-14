import './addTodo.css'
import React , {useState}from 'react'

function AddTodo() {
  return (
    <div className='addtodo'>
        <br />
        <h1><strong>TodoList</strong></h1>
        <hr style={{
            display: 'inline-block',
            justifyContent: 'center',
            width: '70%',
            color: 'white',
            backgroundColor: 'white'
        }} />
        <br />
        <br />
        <input className='box' type="text" placeholder="Add Todo..." /> <br />
        <br />
        <button className='btn'>Create Todo!!</button>
    </div>
  )
}


// function AddTodo() {
//     return (
//         <article>
//             <div>
//                 <Tabs currentTab={currentTab} />

//                 {
//                     todos.some(todo => todo.done) ? (
//                         <button
//                             onClick={removeDoneTodos}
//                             className="button clear"
//                         >Remove Done Todos</button>
//                     ) : null    
//                 }
//             </div>

//             <ul>
//                 {
//                     getTodos().map(todo => (
//                         <Todo 
//                             key={todo._id}
//                             todo={todo}
//                         />
//                     ))
//                 }
//             </ul>
//         </article>
//     )
// }

export default AddTodo