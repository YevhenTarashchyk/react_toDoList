import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
  state = {
    title: ''
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form className="row input-area" onSubmit={this.onSubmit}>
        <div className="form-group col-md-9">
          <input
            type="text"
            name="title"
            placeholder="New Task..."
            className="form-control"
            id="addTask"
            value={this.state.title}
            onChange={this.onChange}
          />
        </div>
        <div className="form-group col-md-1">
          <button className="btn btn-primary" type="submit" value="submit">
            Add
          </button>
        </div>
      </form>
    );
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};
export default AddTodo;
