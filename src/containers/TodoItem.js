import { connect } from 'react-redux';
import { editTask, deleteTask, toggleTask } from '../actions/tasks';
import TodoItem from '../components/TodoItem';

const mapDispatchToProps = (dispatch) => ({
  editTask: (id, title) => dispatch(editTask(id, title)),
  deleteTask: (id) => dispatch(deleteTask(id)),
  toggleTask: (id) => dispatch(toggleTask(id)),
});

export default connect(undefined, mapDispatchToProps)(TodoItem);