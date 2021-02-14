import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ToDoList from "./components/todos-list.component";
import EditToDo from "./components/edit-todo.component";
import CreateTodo from "./components/create-todo.component";

// import logo from "./logo.jpg";
import Header from "./components/header.component";

function App() {
  return <Header />;
}

export default App;
