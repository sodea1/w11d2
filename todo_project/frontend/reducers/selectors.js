import React from 'react';


export const allTodos = ({todos}) => {
  // debugger;
  return Object.keys(todos).map(id => {
    return todos[id];
  });
};