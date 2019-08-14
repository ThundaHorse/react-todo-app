import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends React.Component {
  // Passing up this.props.markComplete, pass into TodoItem, however need to pass up one more level to App.js, if this was the root component it would be fine
  // markComplete = () => {
  //   console.log('Testing');
  // };

  render() {
    return this.props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        removeTodo={this.props.removeTodo}
      />
    ));
  }
}

// Validating PropTypes, good practice
Todos.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Todos;

// In TodoItem, this.props.markComplete is called -> Runs whatever is set to markComplete in Todos (parent component) -> Set to an actual method called markComplete

// Need to go up one level to App.js because that's where the state is
// Change 'this.markComplete' to 'this.props.markComplete'
// <TodoItem key={todo.id} todo={todo} markComplete={this.markComplete} />;
