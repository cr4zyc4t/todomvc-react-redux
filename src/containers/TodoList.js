import { connect } from 'react-redux';
import { editTask, deleteTask, toggleTask, toggleAll } from '../actions/tasks';
import TodoList from '../components/TodoList';
import { getFilteredTasks } from '../store/selectors';

const mapStateToProps = (state) => ({
  filteredTasks: getFilteredTasks(state),
});

const mapDispatchToProps = (dispatch) => ({
  editTask: (id, title) => dispatch(editTask(id, title)),
  deleteTask: (id) => dispatch(deleteTask(id)),
  toggleTask: (id) => dispatch(toggleTask(id)),
  toggleAll: (checked) => dispatch(toggleAll(checked)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);