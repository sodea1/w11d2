import { ADD_TODO, ADD_TODOS, REMOVE_TODO } from "../actions/todo_actions";

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};

export const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch(action.type){
    case ADD_TODO:
      debugger;
      nextState[action.todo.id] = action.todo;
      return nextState;
    case ADD_TODOS:
      // const allTodos = {};
      action.todos.map((item) => {
        nextState[item.id] = item;
      });
      return nextState;
    case REMOVE_TODO:
      delete nextState[action.todo.id];
      return nextState;
    default:
      return state;
  }
};