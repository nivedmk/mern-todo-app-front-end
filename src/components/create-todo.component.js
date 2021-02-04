import React, { Component } from "react";
import axios from "axios";

export default class CreateTodo extends Component {
  defaultState = {
    todo_description: "",
    todo_responsible: "",
    todo_priority: "",
    todo_completed: false,
  };

  constructor(props) {
    super(props);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeResponsible = this.onChangeResponsible.bind(this);
    this.onChangePriority = this.onChangePriority.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = this.defaultState;
  }

  onChangeDescription(e) {
    this.setState({
      todo_description: e.target.value,
    });
  }

  onChangeResponsible(e) {
    this.setState({
      todo_responsible: e.target.value,
    });
  }

  onChangePriority(e) {
    this.setState({
      todo_priority: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(
      "Form Submitted" +
        "\n" +
        this.state.todo_completed +
        "\n" +
        this.state.todo_description +
        "\n" +
        this.state.todo_priority +
        "\n" +
        this.state.todo_responsible +
        "\n"
    );

    const newTodo = {
      todo_description: this.state.todo_description,
      todo_responsible: this.state.todo_responsible,
      todo_priority: this.state.todo_priority,
      todo_completed: this.state.todo_completed,
    };

    axios
      .post("http://localhost:4000/todos/add", newTodo)
      .then((res) => console.log(res.data));

    this.setState(this.defaultState);
  }

  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>CreateNew ToDo</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Description:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.todo_description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label>Responsible:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.todo_responsible}
              onChange={this.onChangeResponsible}
            />
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityLow"
                value="Low"
                checked={this.state.todo_priority === "Low"}
                onChange={this.onChangePriority}
              />
              <label className="fomr-check-label">Low</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityMedium"
                value="Medium"
                checked={this.state.todo_priority === "Medium"}
                onChange={this.onChangePriority}
              />
              <label className="fomr-check-label">Medium</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityHigh"
                value="High"
                checked={this.state.todo_priority === "High"}
                onChange={this.onChangePriority}
              />
              <label className="fomr-check-label">High</label>
            </div>
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create Todo"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
