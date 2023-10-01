import React, { Component } from 'react';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      inputValue: '',
    };
  }

  addTodo = () => {
    if (this.state.inputValue.trim() !== '') {
      const newTodo = {
        text: this.state.inputValue,
        completed: false,
      };
      this.setState({
        todos: [...this.state.todos, newTodo],
        inputValue: '',
      });
    }
  };

  toggleTodo = (index) => {
    const todos = [...this.state.todos];
    todos[index].completed = !todos[index].completed;
    this.setState({ todos });
  };

  deleteTodo = (index) => {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({ todos });
  };

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <div>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.addTodo}>Add Todo</button>
        </div>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => this.toggleTodo(index)}
              />
              {todo.text}
              <button onClick={() => this.deleteTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoApp;
