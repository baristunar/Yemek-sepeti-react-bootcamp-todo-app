import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TodoBody extends Component {
  constructor() {
    super();
    this.delete = this.delete.bind(this);
    this.clear = this.clear.bind(this);
  }
  static propTypes = {
    deleteTodo: PropTypes.func,
    todos: PropTypes.array,
    clearTodos: PropTypes.func,
  };
  delete(index) {
    this.props.deleteTodo(index);
  }

  clear() {
    this.props.clearTodos();
  }

  render() {
    return (
      <div>
        <div className="card-body">
          <div className="card-title">
            <h4 className="text-white">Todo List</h4>
            <input
              type="text"
              className="form-control"
              placeholder="Todo Arayın.."
            />
            <ul className="list-group d-flex mt-4">
              {this.props.todos.map((item, index) => {
                return (
                  <li
                    className="list-group-item d-flex justify-content-between"
                    key={index}
                  >
                    {item}
                    <a href="#" onClick={() => this.delete(index)}>
                      <i className="far fa-trash-alt text-danger"></i>
                    </a>
                  </li>
                );
              })}
            </ul>
            <button className="btn btn-danger mt-3 btn-xs" onClick={this.clear}>
              Tüm Todoları Temizle
            </button>
          </div>
        </div>
      </div>
    );
  }
}
