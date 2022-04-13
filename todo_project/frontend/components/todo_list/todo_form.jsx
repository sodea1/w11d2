import React from "react";

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
  }

  updateTitle() {

  }

  updateBody() {

  }

  updateStatus() {

  }

  render() {
    return (
      <form>
        <label>Title
          <input type="text" onChange={this.updateTitle} value={this.state.title}/>
        </label>

        <label>Body
          <input type="text" onChange={this.updateBody} value={this.state.body}/>
        </label>

        <label>Status
          <input type="radio" name="radio" onChange={this.updateStatus} value={this.state.status}/>
          <input type="radio" name="radio" onChange={this.updateStatus} value={this.state.status}/>
        </label>
      </form>
    )
  }
}

export default TodoForm;