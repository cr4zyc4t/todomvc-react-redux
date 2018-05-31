import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class TodoList extends React.Component {
  static propTypes = {
    filteredTasks: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })).isRequired,
    editTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    toggleTask: PropTypes.func.isRequired,
    toggleAll: PropTypes.func.isRequired,
  }

  toggleAll = (e) => {
    let checked = e.target.checked;
    this.props.toggleAll(checked);
  }

  deleteTask = (id) => () => this.props.deleteTask(id)

  editTask = (id) => (title) => this.props.editTask(id, title)

  toggleTask = (id) => () => this.props.toggleTask(id)

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
                  delete={this.deleteTask(task.id)}
                  edit={this.editTask(task.id)}
                  toggleTask={this.toggleTask(task.id)}
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