import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import Immutable from 'immutable';

let preloadedState = localStorage.getItem('todomvc-react-redux');
if (preloadedState) {
  preloadedState = JSON.parse(preloadedState);
} else {
  preloadedState = {
    tasks: [],
    filter: 'all'
  };
}

let initialState = Immutable.fromJS(preloadedState);

/**
 * Save to localstorage on every state change
 */
const saveToStorage = store => next => action => {
  let result = next(action);
  localStorage.setItem('todomvc-react-redux', JSON.stringify(store.getState().toJS()));
  return result;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(
      saveToStorage
    )
  )
);
export default store;