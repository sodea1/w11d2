export const ADD_TODOS = "ADD_TODOS";
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
import * as APIUtil from '../util/todo_api_util';

export const addTodos = (todos) => {
  return {
    type: ADD_TODOS,
    todos
  };
};

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    todo
  };
};

export const removeTodo = (todo) => {
  return {
    type: REMOVE_TODO,
    todo: todo
  };
};

export const fetchTodos = () => {
  return (dispatch) => {
    APIUtil.fetchTodos().then(todos => dispatch(addTodos(todos)));
  };
};

export const createTodo = (todo) => {
  return (dispatch) => {
    return APIUtil.createTodo(todo).then(todo => dispatch(addTodo(todo)));
  };
};