import React from 'react'
// import Todo from './Todo'
export default function Todo({ todo, toggleTodo }) {
    function handleTodoClick(){
        toggleTodo(todo.id)
    }
    return (
    <div>
      <label>
        <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
        {todo}
      </label>
    </div>
  )
}
    
    //     todos.map(todo =>{
    //         return <Todo key={todo }todo={todo} />
    //     }) //needs a unique "key"prop which is key={todo }
    // )
