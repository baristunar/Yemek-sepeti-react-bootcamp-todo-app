import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TodoHeader extends Component {
  constructor() {
    super();
    this.setTodoValue = this.setTodoValue.bind(this);
    this.sendTodo = this.sendTodo.bind(this);
  }

  static propTypes = {
    addNewTodo: PropTypes.func,
    setNewTodo: PropTypes.func,
  };

  setTodoValue(e) {
    this.props.setNewTodo(e.target.value);
  }
  sendTodo(e) {
    if (this.props.newTodoInput) {
      this.props.addNewTodo();
    }
  }

  render() {
    return (
      <div>
        <div className="card-title">
          <h3 className="text-center text-white">Todo App</h3>
          <form className="mt-3">
            <input
              onChange={this.setTodoValue}
              type="text"
              placeholder="Todo girin..."
              className="form-control"
              value={this.props.newTodoInput}
            />
            <input
              onClick={this.sendTodo}
              type="submit"
              className="form-control mt-3 btn btn-danger"
              value="Ekle"
            />
          </form>
        </div>
      </div>
    );
  }
}
