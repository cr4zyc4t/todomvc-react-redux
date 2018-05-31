import { CHANGE_FILTER } from '../../actions/filter';

const handlers = {
  [CHANGE_FILTER]: (state, { filter }) => {
    return filter;
  }
};

const users = (state = 'all', { type, payload }) => {
  const handler = handlers[type];
  return !handler ? state : handler(state, payload);
};
export default users;