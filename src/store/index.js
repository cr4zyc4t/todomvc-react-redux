import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';

let savedTodos = localStorage.getItem('todomvc-react-redux');
if (savedTodos) {
  savedTodos = JSON.parse(savedTodos);
} else {
  savedTodos = {
    tasks: [],
    filter: 'all'
  };
}

/**
 * Save to localstorage on every state change
 */
const saveToStorage = store => next => action => {
  const result = next(action);
  localStorage.setItem('todomvc-react-redux', JSON.stringify(store.getState()));
  return result;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  savedTodos,
  composeEnhancers(
    applyMiddleware(
      saveToStorage
    )
  )
);
export default store;