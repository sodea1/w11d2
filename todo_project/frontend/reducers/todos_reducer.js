import { ADD_TODO, ADD_TODOS } from "../actions/todo_actions";

export const todosReducer = (state ={}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);

  switch(action.type){
    case ADD_TODO:
      nextState[action.todo.id] = action.todo;
      return nextState;
    default:
      return state;
  }
};