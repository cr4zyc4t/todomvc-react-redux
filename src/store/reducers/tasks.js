import { ADD_TASK, EDIT_TASK, DELETE_TASK, TOGGLE_TASK, CLEAR_COMPLETED, TOGGLE_ALL } from '../../actions/tasks';

const addTask = (state, { id, title }) => {
  return [{
    id,
    title,
    completed: false
  }, ...state];
};

const editTask = (state, { id, title }) => {
  return state.map(task => {
    if (task.id === id) {
      return {
        id,
        title,
        completed: task.completed
      };
    }
    return task;
  });
};

const deleteTask = (state, { id }) => state.filter(task => task.id !== id);

const toggleTask = (state, { id }) => state.map(task => {
  if (task.id === id) {
    return {
      ...task,
      completed: !task.completed
    };
  }
  return task;
});

const clearCompleted = (state) => state.filter(task => !task.completed);

const toggleAll = (state, { checked }) => state.map(task => ({ ...task, completed: checked }));

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