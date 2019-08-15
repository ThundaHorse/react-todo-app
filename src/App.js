import React from 'react';
import './App.css';
import Todos from './components/todos/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/todos/AddTodo';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = { todos: [] };
  }

  // state = {
  //   todos: []
  // };

  componentDidMount() {
    axios
      .get('https://whispering-peak-23705.herokuapp.com/api/todos')
      .then((response) => {
        this.setState({ todos: response.data });
      });
  }

  // Receive markComplete from child component Todos which received from TodoItem
  // In order to know which item we're targetting, must bind 'this' at the beginning which is TodoItems and id

  // Marking complete
  markComplete = (id, completed) => {
    axios
      .patch(`https://whispering-peak-23705.herokuapp.com/api/todos/${id}`, {
        completed: !completed
      })
      .then((response) => {
        console.log(response.data);
        this.setState({
          todos: this.state.todos.map((todo) => {
            if (todo.id === id) {
              todo.completed = !todo.completed;
            }
            return todo;
          })
        });
      });
  };

  // Delete
  removeTodo = (id) => {
    // Aim is to remove the todo item that is 'removed'
    // Copy everything that is currently present so => use spread operator
    // After populating, return any todo where not equal to id passed in
    axios
      .delete(`https://whispering-peak-23705.herokuapp.com/api/todos/${id}`)
      .then((response) => {
        this.setState({
          // Copy everything that is currently present so => use spread operator
          // After populating, return any todo where not equal to id passed in
          todos: [...this.state.todos.filter((todo) => todo.id !== id)]
        });
      });
  };

  // Add
  addTodo = (title) => {
    const newTodo = {
      title: title,
      completed: false
    };

    axios
      .post('https://whispering-peak-23705.herokuapp.com/api/todos', newTodo)
      .then((response) =>
        this.setState({ todos: [...this.state.todos, response.data] })
      );
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
