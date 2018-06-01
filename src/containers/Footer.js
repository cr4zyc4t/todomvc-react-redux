import { connect } from 'react-redux';
import { changeFilter } from '../actions/filter';
import { clearCompleted } from '../actions/tasks';
import Footer from '../components/Footer';
import { countRemainingTasks } from '../store/selectors';

const mapStateToProps = (state) => ({
  filter: state.get('filter'),
  remainingTasks: countRemainingTasks(state),
});

const mapDispatchToProps = (dispatch) => ({
  setFilter: (filter) => dispatch(changeFilter(filter)),
  clearCompleted: () => dispatch(clearCompleted()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);