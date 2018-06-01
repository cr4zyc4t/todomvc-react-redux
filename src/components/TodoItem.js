import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
  // static propTypes = {
  //   id: PropTypes.string.isRequired,
  //   title: PropTypes.string.isRequired,
  //   completed: PropTypes.bool.isRequired,
  //   delete: PropTypes.func.isRequired,
  //   edit: PropTypes.func.isRequired,
  //   toggleTask: PropTypes.func.isRequired,
  // }

  constructor(props) {
    super(props);

    this.state = {
      editing: false,
    };

    this.taskInput = React.createRef();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.id !== this.props.id
      || nextProps.title !== this.props.title
      || nextProps.completed !== this.props.completed
      || nextState !== this.state);
  }

  componentDidUpdate() {
    if (this.state.editing) {
      this.taskInput.current.focus();
    }
  }

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
      this.props.edit(title);
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
            onChange={this.props.toggleTask}
          />
          <label onDoubleClick={this.handleEdit}>
            {this.props.title}
          </label>
          <button className="destroy" onClick={this.props.delete} />
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