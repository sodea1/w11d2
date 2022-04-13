import React from "react";
import { addTodo } from "../../actions/todo_actions";
import uniqueId from "../../../some_util";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      id: uniqueId(), 
      title: "", 
      body: "", 
      done: ""
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
    this.props.addTodo(this.state)
    document.getElementById("radio-button").setAttribute('checked',"false");
    this.setState({
      id: Math.floor(Math.random() * 1000), 
      title: "", 
      body: "", 
      done: ""
    })

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Title
          <input type="text" onChange={this.updateTitle} value={this.state.title}/>
        </label>
        <br />
        <label>Body
          <input type="text" onChange={this.updateBody} value={this.state.body}/>
        </label>
        <br />
        <label>
          True
          <input type="radio" id="radio-button" name="radio" onChange={this.updateStatus} value="true"/> 
        </label>
        <br />
        <label>
          False
          <input type="radio" id="radio-button" name="radio" onChange={this.updateStatus} value="false"/>
        </label>
        <br />
        <input type="submit" value="Create Todo" />
      </form>
    )
  }
}

export default TodoForm;