import React from 'react';
import TodoItem from '../containers/TodoItem';
import PropTypes from 'prop-types';

class TodoList extends React.Component {
  static propTypes = {
    filteredTasks: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })).isRequired,
    toggleAll: PropTypes.func.isRequired,
  }

  toggleAll = (e) => {
    const { checked } = e.target;
    this.props.toggleAll(checked);
  }

  render() {
    return (
      <section className="main">
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          onChange={this.toggleAll}
        />
        <label
          htmlFor="toggle-all"
        />
        <ul className="todo-list">
          {
            this.props.filteredTasks.map((task) => {
              return (
                <TodoItem
                  key={task.id}
                  {...task}
                />
              );
            })
          }
        </ul>
      </section>
    );
  }
}

export default TodoList;