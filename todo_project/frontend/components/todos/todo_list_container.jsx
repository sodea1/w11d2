import React from "react";
import { connect } from "react-redux";
import { addTodo, removeTodo } from "../../actions/todo_actions";
import { allTodos } from "../../reducers/selectors";
import TodoList from "./todo_list";

const mapStateToProps = (state) => {
  return {todos: allTodos(state)}
}

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodo(todo)),
  removeTodo: (todo) => dispatch(removeTodo(todo))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);