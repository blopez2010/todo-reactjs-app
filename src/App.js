import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/todo/TodoForm';
import TodoList from './components/todo/TodoList';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [
        { id: 1, name: 'Learn JSX', isComplete: false },
        { id: 2, name: 'Build an Awesome App', isComplete: true },
        { id: 3, name: 'Ship It', isComplete: false }
      ],
      currentTodo: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      currentTodo: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
          <TodoForm handleInputChange={this.handleInputChange} currentTodo={this.state.currentTodo}/>
          <TodoList todos={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default App;
