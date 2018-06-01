import Immutable from 'immutable';
import { ADD_TASK, EDIT_TASK, DELETE_TASK, TOGGLE_TASK, CLEAR_COMPLETED, TOGGLE_ALL } from '../../actions/tasks';

const addTask = (state, { id, title }) => {
  let newTask = Immutable.Map({
    id,
    title,
    completed: false
  });
  return state.unshift(newTask);
};

const editTask = (state, { id, title }) => {
  return state.update(state.findIndex(task => task.get('id') === id), (task) => task.set('title', title));
};

const deleteTask = (state, { id }) => state.delete(state.findIndex(task => task.get('id') === id));

const toggleTask = (state, { id }) => state.update(state.findIndex(task => task.get('id') === id), (task) => task.set('completed', !task.get('completed')));

const clearCompleted = (state) => state.filter(task => !task.get('completed'));

const toggleAll = (state, { checked }) => state.map(task => task.set('completed', checked));

const handlers = {
  [ADD_TASK]: addTask,
  [EDIT_TASK]: editTask,
  [DELETE_TASK]: deleteTask,
  [TOGGLE_TASK]: toggleTask,
  [CLEAR_COMPLETED]: clearCompleted,
  [TOGGLE_ALL]: toggleAll,
};

const users = (state = [], { type, payload }) => {
  const handler = handlers[type];
  return !handler ? state : handler(state, payload);
};
export default users;