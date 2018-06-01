import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    editTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    toggleTask: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      editing: false,
    };

    this.taskInput = React.createRef();
  }

  componentDidUpdate() {
    if (this.state.editing) {
      this.taskInput.current.focus();
    }
  }


  deleteTask = () => this.props.deleteTask(this.props.id)

  toggleTask = () => this.props.toggleTask(this.props.id)

  handleEdit = () => {
    this.setState({
      editing: true
    });
  }

  handleSubmit = () => {
    this.setState({
      editing: false
    });
    let title = this.taskInput.current.value.trim();
    if (title && title !== this.props.title) {
      this.props.editTask(this.props.id, title);
    }
  }

  handleKeyDown = (e) => {
    if (e.keyCode !== 13) {
      return;
    }
    this.handleSubmit();
  }

  render() {
    return (
      <li className={classNames({
        completed: this.props.completed,
        editing: this.state.editing,
      })}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={this.props.completed}
            onChange={this.toggleTask}
          />
          <label onDoubleClick={this.handleEdit}>
            {this.props.title}
          </label>
          <button className="destroy" onClick={this.deleteTask} />
        </div>
        <input
          ref={this.taskInput}
          className="edit"
          defaultValue={this.props.title}
          onBlur={this.handleSubmit}
          onKeyDown={this.handleKeyDown}
        />
      </li>
    );
  }
}

export default TodoItem;