import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    };
  };

  // Custom method, doesn't have access to 'this'
  // markComplete(e) {
  //   console.log(this.props);
  // }

  // Avoids having to bind 'this', passing prop up to Todos.js
  // markComplete = (e) => {
  //   console.log(this.props);
  // };

  // Bind 'this' so that markComplete has access to bind
  // <input type="checkbox" onChange={this.markComplete.bind(this)} />{' '}
  render() {
    const { id, title, completed } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            defaultChecked={completed}
            onChange={this.props.markComplete.bind(this, id, completed)}
          />{' '}
          {title}
          <button
            onClick={this.props.removeTodo.bind(this, id)}
            style={btnStyle}
          >
            x
          </button>
        </p>
      </div>
    );
  }
}

// Prop passed from parent component, validate prop passed
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
};

export default TodoItem;

// Without using Redux or a state manager API, have to pass up or climb the ladder into App.js

// Pass up props
// <input type="checkbox" onChange={this.props.markComplete} /> to Todos.js

// Destructuring is a good way to work around having to do 'this.props.props...'
// To do so, set a const {} to the item and put what attributes you want to target in the {}

// Original
// <input type="checkbox" onChange={this.markComplete} />

// Before deconstruction
// <input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.todo.id)} />{' '}
// {this.props.todo.title}
