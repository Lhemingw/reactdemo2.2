import React from 'react'
import Todo from './Todo'
export default function TodoList({todos}) {
    //had a undefined prop on  App.js of to do, needed to put it in the function
    return (
      todos.map(todo =>{
        return <Todo key={todo }todo={todo} />
        //need a unike key prop, so react does not know how to update these properly every time, when our to do array changes its
        //  going to re-render every single to do in that list but we only want it to re-render the ones that change
        //so we used key={todo }

      })
    
    )
}