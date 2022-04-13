import React from "react";
import ReactDOM from "react-dom";
import { addTodos, addTodo, removeTodo } from "./actions/todo_actions";
import configureStore from "./store/store";
import * as steps from "./actions/step_actions";
import Root from "./components/root";
import {allTodos} from "./reducers/selectors";

document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("main");
  const store = configureStore();
  window.store = store;
  window.addTodos = addTodos;
  window.addTodo = addTodo;
  window.removeTodo = removeTodo;
  
  window.receiveSteps = steps.receiveSteps;
  window.receiveStep = steps.receiveStep;
  window.removeStep = steps.removeStep;

  window.allTodos = allTodos;
  
  ReactDOM.render(<Root store={store}/>, main);
  
})