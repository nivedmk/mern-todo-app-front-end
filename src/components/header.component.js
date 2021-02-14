import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ToDoList from "./todos-list.component";
import EditToDo from "./edit-todo.component";
import CreateTodo from "./create-todo.component";
import AboutUs from "./about-us.component";
import LogIn from "./login/logIn.component";

import logo from "../assets/logo.jpg";

const Header = () => {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a
            className="navbar-brand"
            href="https://codingthesmartway.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={logo}
              width="30"
              height="30"
              alt="CodingTheSmartWay.com"
            />
          </a>
          <Link to="/" className="navbar-brand">
            MERN-Stack Todo App
          </Link>
          <div className="collpase nav-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">
                  Todos
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">
                  Create Todo
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="nav-link">
                  About US
                </Link>
              </li>
              <li>
                <Link to="/log-in" className="nav-link">
                  Log In
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Route path="/" exact component={ToDoList} />
        <Route path="/edit/:id" component={EditToDo} />
        <Route path="/create" component={CreateTodo} />
        <Route path="/log-in" component={LogIn} />
        <Route path="/about-us" component={AboutUs} />
      </div>
    </Router>
  );
};

export default Header;
