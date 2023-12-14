import React, { useState, useEffect } from "react";

// import Header from "./Component/Header";
import Todos from "../Component/Todos";
import AddTodo from "../Component/AddTodo";
// import Footer from "./Footer";


export default function About() {
    let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    // console.log("I am On Delete", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const addTodo = (title, desc) => {
    // console.log("adding todo",title,desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    // console.log(myTodo);
    setTodos([...todos, myTodo]);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
    {/* <Header title="Developer List" /> */}
    <AddTodo addTodo={addTodo} />
    <Todos todos={todos} onDelete={onDelete} />
    {/* <Footer/> */}
  </>
  )
}




