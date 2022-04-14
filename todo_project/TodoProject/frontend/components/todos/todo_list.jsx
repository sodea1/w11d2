import React from "react";
// import { removeTodo } from "../../actions/todo_actions";
// import { allTodos } from "../../reducers/selectors";
import TodoForm from "../todo_list/todo_form";

class TodoList extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchTodos();
  }

  render(){
    return (
          <>
            <ul>
              {this.props.todos.map(todo => <li key={todo.id}>Title: {todo.title} Body: {todo.body} Done: {todo.done.toString()}
              </li> )}
            </ul>
      
            <TodoForm addTodo={this.props.addTodo} removeTodo={this.props.removeTodo}/>
          </>
        )
  }
}

export default TodoList;