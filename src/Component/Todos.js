import React from "react";
import TodoItem from "../Component/TodoItem";

export default function Todos(props) {
  return (
    <>
      <div className="ml-24">
        <h1 className="text-3xl  my-4 font-serif font-semibold">Developer List</h1>
        {props.todos.length ===0? "No Developers To Display" :
        props.todos.map((todo) => {
          return (
          <>
          <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} /> <hr/>
          </>
          )
        })
      } 
      </div>
    </>
  );
}
