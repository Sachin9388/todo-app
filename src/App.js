// import React, { useState, useEffect } from "react";
import "./App.css";

// import Header from "./Component/Header";
// import Todos from "./Component/Todos";
// import Footer from "./Component/Footer";
// import AddTodo from "./Component/AddTodo";
// import HomePage from "./HomePage";
// import AboutPage from "./AboutPage";
// import ContactPage from "./ContactPage";
// import Feature from "./Feature";
// import { createBrowserRouter } from "react-router-dom";

// const App = createBrowserRouter([
//   {
//     path: "/",
//     element: <Header />,
//     children: [
//       {
//         // path:"/home",
//         index: true,
//         element: <HomePage />,
//       },
//       {
//         path: "/about",
//         element: <AboutPage />,
//       },
//       {
//         path: "/contact",
//         element: <ContactPage />,
//       },
//       {
//         path: "/feature",
//         element: <Feature />,
//       },
//     ],
//   },
// ]);

// function App() {
//   let initTodo;
//   if (localStorage.getItem("todos") === null) {
//     initTodo = [];
//   } else {
//     initTodo = JSON.parse(localStorage.getItem("todos"));
//   }
//   const onDelete = (todo) => {
//     // console.log("I am On Delete", todo);
//     setTodos(
//       todos.filter((e) => {
//         return e !== todo;
//       })
//     );
//   };

//   const addTodo = (title, desc) => {
//     // console.log("adding todo",title,desc);
//     let sno;
//     if (todos.length === 0) {
//       sno = 0;
//     } else {
//       sno = todos[todos.length - 1].sno + 1;
//     }
//     const myTodo = {
//       sno: sno,
//       title: title,
//       desc: desc,
//     };
//     // console.log(myTodo);
//     setTodos([...todos, myTodo]);
//   };

//   const [todos, setTodos] = useState(initTodo);
//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }, [todos]);

//   return (
//     <>
//       <Header title="Developer List" />
//       <AddTodo addTodo={addTodo} />
//       <Todos todos={todos} onDelete={onDelete} />
//       <Footer />
//     </>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import Navbar from './ComComponent/Navbar';
import HomePage from './ComComponent/HomePage';
import ContactPage from './ComComponent/ContactPage';
import AboutPage from "./ComComponent/AboutPage";
import Footer from "./ComComponent/Footer";
import PrivacyPolicyPage from "./ComComponent/PrivacyPolicyPage";
import LicensingPage from "./ComComponent/LicensingPage";

const App = () => {

  return (
    <Router>
      <Navbar  />
      <Routes>
        <Route path="/home"  element={<HomePage/>}  />
        <Route path="/about" element={<AboutPage/>}  />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/privacypolicy" element={<PrivacyPolicyPage/>} />
        <Route path="/licensing" element={<LicensingPage/>} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
