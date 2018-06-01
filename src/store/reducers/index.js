import { combineReducers } from 'redux-immutable';
import tasks from './tasks';
import filter from './filter';

export default combineReducers({
  tasks,
  filter
});