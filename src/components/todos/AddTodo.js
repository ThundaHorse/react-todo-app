import React from 'react';

export class AddTodo extends React.Component {
  state = {
    title: ''
  };
  // In this case, the state is in the AddTodo component. This would be component level state
  // In the other components, those were app level state so we had to pass up

  // In order to grab what is entered into the input, pass in the event and target the value
  // In cases where there would be multiple inputs, change 'title' to an array of [e.target.name], name is set in the input tags so as long as there's name, it will target
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    // Prevent default behavior of submitting to the file
    e.preventDefault();

    // Now the prop needs to be passed up to App.js
    this.props.addTodo(this.state.title);

    // After submission, reset field
    this.setState({ title: '' });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input
          type="text"
          name="title"
          placeholder="Add todo item"
          style={{ flex: '10', padding: '5px' }}
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: '1' }}
        />
      </form>
    );
  }
}

export default AddTodo;
