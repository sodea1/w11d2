import React from "react";
// import { removeTodo } from "../../actions/todo_actions";
// import { allTodos } from "../../reducers/selectors";
import TodoForm from "../todo_list/todo_form";

const TodoList = (props) => {
  debugger;
  return (
    <>
      <ul>
        {props.todos.map(todo => <li key={todo.id}>Title: {todo.title} Body: {todo.body} Done: {todo.done.toString()}
        </li> )}
      </ul>

      <TodoForm addTodo={props.addTodo} removeTodo={props.removeTodo}/>
    </>
  )
};

export default TodoList;