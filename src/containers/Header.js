import { connect } from 'react-redux';
import { addTask } from '../actions/tasks';
import Header from '../components/Header';

const mapDispatchToProps = (dispatch) => ({
  addTask: (id, title) => dispatch(addTask(id, title))
});

export default connect(undefined, mapDispatchToProps)(Header);