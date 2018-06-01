import { createSelector } from 'reselect';

const tasks = state => state.get('tasks');
const filter = state => state.get('filter');

export const getFilteredTasks = createSelector(
  tasks,
  filter,
  (tasks, filter) => {
    switch (filter) {
      case 'all':
        return tasks;
      case 'active':
        return tasks.filter(task => !task.get('completed'));
      case 'completed':
        return tasks.filter(task => task.get('completed'));
      default:
        break;
    }
  }
);

export const countRemainingTasks = createSelector(
  tasks,
  (tasks) => {
    return tasks.filter(task => ! task.get('completed')).size;
  }
);