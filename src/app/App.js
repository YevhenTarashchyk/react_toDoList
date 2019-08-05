import React, { Component } from 'react';
import { Route, Link, HashRouter } from 'react-router-dom';

import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';

const linkStyle = {
  color: '#000',
  textDecoration: 'none'
};
const slash = {
  margin: '0 10px'
};
class App extends Component {
  constructor(props) {
    super(props);
    this.url = 'https://jsonplaceholder.typicode.com/todos';
    this.limit = 5;
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    fetch(`${this.url}?_limit=${this.limit}`)
      .then(res => res.json())
      .then(obj => this.setState({ todos: obj }));
  }

  markComplete = id => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        const task = todo;
        if (task.id === id) {
          task.completed = !task.completed;
        }
        return task;
      })
    }));
  };

  delTodo = id => {
    this.setState(prevState => ({
      todos: [...prevState.todos.filter(todo => todo.id !== id)]
    }));
    // fetch(`${this.url}/${id}`, {
    //   method: 'DELETE'
    // })
    //   .then(res => res.json())
    //   .then(obj =>
    //     this.setState(prevState => ({
    //       todos: [...prevState.todos.filter(todo => todo.id !== id)]
    //     }))
    //   );
  };

  addTodo = title => {
    const newTodo = {
      id: this.state.todos[this.state.todos.length - 1].id + 1,
      title,
      completed: false
    };
    this.setState(prevState => ({
      todos: [...prevState.todos, newTodo]
    }));
    // fetch(this.url, {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ title, completed: false, userId: 1 })
    // })
    //   .then(res => res.json())
    //   .then(obj =>
    //     this.setState(prevState => ({
    //       todos: [...prevState.todos, obj]
    //     }))
    //   );
  };

  render() {
    return (
      <HashRouter>
        <div className="container">
          <div className="content-area row">
            <div className="col-md-8 col-xs-8 col-lg-8 col-sm-8">
              <h2>ToDo List</h2>
              <Link to="/" style={linkStyle}>
                Home
              </Link>

              <span style={slash}>|</span>

              <Link to="/about" style={linkStyle}>
                About
              </Link>
              <Route
                exact
                path="/"
                render={props => (
                  <React.Fragment>
                    <AddTodo addTodo={this.addTodo} />
                    <ul className="list-group" id="taskList">
                      <Todos
                        todos={this.state.todos}
                        markComplete={this.markComplete}
                        delTodo={this.delTodo}
                      />
                    </ul>
                  </React.Fragment>
                )}
              />
              <Route path="/about" component={About} />
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
