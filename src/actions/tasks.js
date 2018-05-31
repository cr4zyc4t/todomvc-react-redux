export const ADD_TASK = 'ADD_TASK';
export const addTask = (id, title) => ({
  type: ADD_TASK,
  payload: {
    id,
    title,
  }
});

export const EDIT_TASK = 'EDIT_TASK';
export const editTask = (id, title) => ({
  type: EDIT_TASK,
  payload: {
    id,
    title,
  }
});

export const DELETE_TASK = 'DELETE_TASK';
export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: {
    id,
  }
});

export const TOGGLE_TASK = 'TOGGLE_TASK';
export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: {
    id,
  }
});

export const TOGGLE_ALL = 'TOGGLE_ALL';
export const toggleAll = (checked) => ({
  type: TOGGLE_ALL,
  payload: {
    checked
  }
});

export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';
export const clearCompleted = () => ({
  type: CLEAR_COMPLETED,
});
