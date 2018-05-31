import React from 'react';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';

class Header extends React.Component {
  static propTypes = {
    addTask: PropTypes.func.isRequired
  }

  submitNewTask = (e) => {
    if (e.keyCode !== 13) {
      return;
    }

    let taskTitle = e.target.value.trim();

    if (taskTitle) {
      this.props.addTask(uuid(), taskTitle);
      e.target.value = '';
    }
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          onKeyDown={this.submitNewTask}
          autoFocus={true}
        />
      </header>
    );
  }
}

export default Header;