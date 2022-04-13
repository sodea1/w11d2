import React from "react";
import { addTodo } from "../../actions/todo_actions";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      id: Math.floor(Math.random() * 1000), 
      title: "", 
      body: "", 
      done: false 
    }
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateTitle(e) {
    this.setState({title: e.target.value});
  }

  updateBody(e) {
    this.setState({body: e.target.value})
  }

  updateStatus(e) {
    this.setState({done: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger;
    this.props.addTodo(this.state)
    this.setState({
      id: Math.floor(Math.random() * 1000), 
      title: "", 
      body: "", 
      done: false 
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Title
          <input type="text" onChange={this.updateTitle} value={this.state.title}/>
        </label>

        <label>Body
          <input type="text" onChange={this.updateBody} value={this.state.body}/>
        </label>

        <label>Status
          <input type="radio" name="radio" onChange={this.updateStatus} value={this.state.done.toString()}/>
          <input type="radio" name="radio" onChange={this.updateStatus} value={this.state.done.toString()}/>
        </label>

        <input type="submit" value="Create Todo" />
      </form>
    )
  }
}

export default TodoForm;