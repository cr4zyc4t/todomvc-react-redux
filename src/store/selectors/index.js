import { createSelector } from 'reselect';

const tasks = state => state.tasks;
const filter = state => state.filter;

export const getFilteredTasks = createSelector(
  tasks,
  filter,
  (tasks, filter) => {
    switch (filter) {
      case 'all':
        return tasks;
      case 'active':
        return tasks.filter(task => !task.completed);
      case 'completed':
        return tasks.filter(task => task.completed);
      default:
        break;
    }
  }
);

export const countRemainingTasks = createSelector(
  tasks,
  (tasks) => {
    return tasks.filter(task => !task.completed).length;
  }
);