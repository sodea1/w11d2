import React from "react";
import ReactDOM from "react-dom";
import { addTodos, addTodo } from "./actions/todo_actions";
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("main");
  ReactDOM.render(<h1>Boo-Yah App</h1>, main);
  const store = configureStore();
  window.store = store;
  window.addTodos = addTodos;
  window.addTodo = addTodo;
})