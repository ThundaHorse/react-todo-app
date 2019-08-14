import React from 'react';
import './App.css';
import Todos from './components/todos/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/todos/AddTodo';

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Study React',
        completed: false
      },
      {
        id: 2,
        title: 'Beat meat',
        completed: false
      },
      {
        id: 3,
        title: 'Wash dishes',
        completed: false
      },
      {
        id: 4,
        title: 'Make dinner',
        completed: false
      }
    ]
  };
  // Receive markComplete from child component Todos which received from TodoItem
  // In order to know which item we're targetting, must bind 'this' at the beginning which is TodoItems and id

  // Marking complete
  markComplete = (id) => {
    // Passing in state as a whole which is an object
    this.setState({
      // Need to match the id that's passed in and updated the completed value, so map to array
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          // Set to not what current completed is to be able to toggle
          todo.completed = !todo.completed;
        }

        // After need to return todo to update ui due to state change
        return todo;
      })
    });
  };

  // Delete
  removeTodo = (id) => {
    // Aim is to remove the todo item that is 'removed'
    this.setState({
      // Copy everything that is currently present so => use spread operator
      // After populating, return any todo where not equal to id passed in
      todos: [...this.state.todos.filter((todo) => todo.id !== id)]
    });
  };

  // Add
  addTodo = (title) => {
    const newTodo = {
      id: this.state.todos.length + 1,
      title: title,
      completed: false
    };

    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            removeTodo={this.removeTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
