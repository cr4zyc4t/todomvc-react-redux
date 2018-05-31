import React from 'react';
import classNames from 'classnames';
import { pluralize } from '../utils';
import PropTypes from 'prop-types';

class Footer extends React.Component {
  static propTypes = {
    filter: PropTypes.string.isRequired,
    remainingTasks: PropTypes.number.isRequired,
    setFilter: PropTypes.func.isRequired,
    clearCompleted: PropTypes.func.isRequired,
  }

  setFilter = (filter) => (e) => {
    e.preventDefault();
    this.props.setFilter(filter);
  }

  render() {
    let { remainingTasks, filter, clearCompleted } = this.props;
    let activeTodoWord = pluralize('item', remainingTasks);
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{remainingTasks}</strong> {activeTodoWord} left
        </span>
        <ul className="filters">
          <li>
            <a
              href=""
              onClick={this.setFilter('all')}
              className={classNames({ selected: filter === 'all' })}>
              All
            </a>
          </li>
          &nbsp;
          <li>
            <a
              href=""
              onClick={this.setFilter('active')}
              className={classNames({ selected: filter === 'active' })}>
              Active
            </a>
          </li>
          &nbsp;
          <li>
            <a
              href=""
              onClick={this.setFilter('completed')}
              className={classNames({ selected: filter === 'completed' })}>
              Completed
            </a>
          </li>
        </ul>
        <button
          className="clear-completed"
          onClick={clearCompleted}
        >
          Clear completed
        </button>
      </footer>
    );
  }
}

export default Footer;