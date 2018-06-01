import React from 'react';
import Header from './containers/Header';
import TodoList from './containers/TodoList';
import Footer from './containers/Footer';

import 'normalize.css';
import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';

class TodoApp extends React.Component {
  render() {
    return (
      <div className="todoapp">
        <Header/>
        <TodoList />
        <Footer/>
      </div>
    );
  }
}

export default TodoApp;