import React, { Component } from "react";
import TodoHeader from "./TodoHeader";
import TodoBody from "./TodoBody";

export default class Container extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: "",
    };
    this.addNewTodo = this.addNewTodo.bind(this);
    this.setNewTodo = this.setNewTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.clearTodos = this.clearTodos.bind(this);
  }

  addNewTodo() {
    const todoList = this.state.todos;
    todoList.push(this.state.newTodo);
    this.setState({
      todos: todoList,
      newTodo: "",
    });
  }
  setNewTodo(value) {
    this.setState({
      newTodo: value,
    });
  }

  deleteTodo(index) {
    const todoList = this.state.todos;
    todoList.splice(index, 1);
    this.setState({
      todos: todoList,
    });
  }

  clearTodos() {
    this.setState({
      todos: [],
    });
  }
  render() {
    return (
      <div className="container">
        <div className="card mt-5 mx-auto w-50 bg-primary">
          <div className="card-body">
            <TodoHeader
              setNewTodo={this.setNewTodo}
              addNewTodo={this.addNewTodo}
              newTodoInput={this.state.newTodo}
            />
            <TodoBody
              todos={this.state.todos}
              deleteTodo={this.deleteTodo}
              clearTodos={this.clearTodos}
            />
          </div>
        </div>
      </div>
    );
  }
}
