import { ADD_TODO, ADD_TODOS } from "../actions/todo_actions";

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
      const allTodos = {};
      // debugger;
      action.todos.map((item, idx) => {
        allTodos[idx] = item;
      });
      debugger;
      // const finalState = Object.assign({}, allTodos);
      // nextState[1]= allTodos;
      return allTodos;
    default:
      return state;
  }
};