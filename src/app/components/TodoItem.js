import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    };
  };

  render() {
    const { id, title, completed } = this.props.todo;
    return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 checkbox">
            <label htmlFor="done">
              <input
                checked={completed}
                name="done"
                type="checkbox"
                onChange={this.props.markComplete.bind(this, id)}
              />
            </label>
          </div>
          <div
            className="col-md-10 col-xs-10 col-lg-10 col-sm-10 task-text"
            style={this.getStyle()}
          >
            {title}
          </div>
          <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1">
            <button
              type="button"
              className=""
              onClick={this.props.delTodo.bind(this, id)}
              style={{ textDecoration: 'none', outline: 'none', border: '0' }}
            >
              <i
                id="deleteTask"
                className="delete-icon glyphicon glyphicon-trash"
              />
            </button>
          </div>
        </div>
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

export default TodoItem;
