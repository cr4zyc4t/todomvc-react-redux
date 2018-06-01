import reducers from './reducers';

test('toggle all', () => {
  let state;
  state = reducers({ tasks: [{ id: 'cc762288-7ef0-4609-996f-43dfaa624f7a', title: '232', completed: false }, { id: '5d97ec34-0ed8-486f-b46f-816549f6d73c', title: 'wd23', completed: false }, { id: 'e2888eb8-e037-40e6-8ca7-b269787baba3', title: 'wdwd', completed: true }, { id: '3b817505-39d5-4d31-91ae-1c1329530ba2', title: 'qwdwqd', completed: false }], filter: 'all' }, { type: 'TOGGLE_ALL', payload: { checked: true } });
  expect(state).toEqual({ tasks: [{ id: 'cc762288-7ef0-4609-996f-43dfaa624f7a', title: '232', completed: true }, { id: '5d97ec34-0ed8-486f-b46f-816549f6d73c', title: 'wd23', completed: true }, { id: 'e2888eb8-e037-40e6-8ca7-b269787baba3', title: 'wdwd', completed: true }, { id: '3b817505-39d5-4d31-91ae-1c1329530ba2', title: 'qwdwqd', completed: true }], filter: 'all' });
});

test('clear completed tasks', () => {
  let state;
  state = reducers({ tasks: [{ id: 'cc762288-7ef0-4609-996f-43dfaa624f7a', title: '232', completed: true }, { id: '5d97ec34-0ed8-486f-b46f-816549f6d73c', title: 'wd23', completed: true }, { id: 'e2888eb8-e037-40e6-8ca7-b269787baba3', title: 'wdwd', completed: true }, { id: '3b817505-39d5-4d31-91ae-1c1329530ba2', title: 'qwdwqd', completed: true }], filter: 'all' }, { type: 'CLEAR_COMPLETED' });
  expect(state).toEqual({ tasks: [], filter: 'all' });
});

test('add task 1', () => {
  let state;
  state = reducers({ tasks: [], filter: 'all' }, { type: 'ADD_TASK', payload: { id: '7dc4e625-d336-40d3-92f6-b73d12d84670', title: '1' } });
  expect(state).toEqual({ tasks: [{ id: '7dc4e625-d336-40d3-92f6-b73d12d84670', title: '1', completed: false }], filter: 'all' });
});

test('add task 2', () => {
  let state;
  state = reducers({ tasks: [{ id: '7dc4e625-d336-40d3-92f6-b73d12d84670', title: '1', completed: false }], filter: 'all' }, { type: 'ADD_TASK', payload: { id: 'ca14dc02-9129-44e6-a3fa-f0877c8e2713', title: '2' } });
  expect(state).toEqual({ tasks: [{ id: 'ca14dc02-9129-44e6-a3fa-f0877c8e2713', title: '2', completed: false }, { id: '7dc4e625-d336-40d3-92f6-b73d12d84670', title: '1', completed: false }], filter: 'all' });
});

test('add task 3', () => {
  let state;
  state = reducers({ tasks: [{ id: 'ca14dc02-9129-44e6-a3fa-f0877c8e2713', title: '2', completed: false }, { id: '7dc4e625-d336-40d3-92f6-b73d12d84670', title: '1', completed: false }], filter: 'all' }, { type: 'ADD_TASK', payload: { id: 'e1270010-1770-4ba8-9924-910c34123a55', title: '3' } });
  expect(state).toEqual({ tasks: [{ id: 'e1270010-1770-4ba8-9924-910c34123a55', title: '3', completed: false }, { id: 'ca14dc02-9129-44e6-a3fa-f0877c8e2713', title: '2', completed: false }, { id: '7dc4e625-d336-40d3-92f6-b73d12d84670', title: '1', completed: false }], filter: 'all' });
});

test('reducers', () => {
  let state;
  state = reducers({ tasks: [{ id: 'e1270010-1770-4ba8-9924-910c34123a55', title: '3', completed: false }, { id: 'ca14dc02-9129-44e6-a3fa-f0877c8e2713', title: '2', completed: false }, { id: '7dc4e625-d336-40d3-92f6-b73d12d84670', title: '1', completed: false }], filter: 'all' }, { type: 'ADD_TASK', payload: { id: '30f93c0b-f3af-475d-8908-603f469bddc2', title: '4' } });
  expect(state).toEqual({ tasks: [{ id: '30f93c0b-f3af-475d-8908-603f469bddc2', title: '4', completed: false }, { id: 'e1270010-1770-4ba8-9924-910c34123a55', title: '3', completed: false }, { id: 'ca14dc02-9129-44e6-a3fa-f0877c8e2713', title: '2', completed: false }, { id: '7dc4e625-d336-40d3-92f6-b73d12d84670', title: '1', completed: false }], filter: 'all' });
});

test('reducers', () => {
  let state;
  state = reducers({ tasks: [{ id: '60fc59c4-7475-4675-bcca-36a5f7d44349', title: '10', completed: false }, { id: 'ef80f372-8658-4b1a-a2f5-43bc8fb188e3', title: '9', completed: false }, { id: '445f82df-5bd3-461c-bc51-01f15512c0b3', title: '8', completed: false }, { id: '7cb1f381-9d6f-46f0-b77e-32b3b2b52d82', title: '7', completed: false }, { id: 'a5ba9fc8-0feb-4075-93c8-5e10ca0f57ec', title: '6', completed: false }, { id: '9237886e-8101-4cb4-86fe-5c344d93baa0', title: '5', completed: false }, { id: '30f93c0b-f3af-475d-8908-603f469bddc2', title: '4', completed: false }, { id: 'e1270010-1770-4ba8-9924-910c34123a55', title: '3', completed: false }, { id: 'ca14dc02-9129-44e6-a3fa-f0877c8e2713', title: '2', completed: false }, { id: '7dc4e625-d336-40d3-92f6-b73d12d84670', title: '1', completed: false }], filter: 'all' }, { type: 'EDIT_TASK', payload: { id: '7cb1f381-9d6f-46f0-b77e-32b3b2b52d82', title: '72' } });
  expect(state).toEqual({ tasks: [{ id: '60fc59c4-7475-4675-bcca-36a5f7d44349', title: '10', completed: false }, { id: 'ef80f372-8658-4b1a-a2f5-43bc8fb188e3', title: '9', completed: false }, { id: '445f82df-5bd3-461c-bc51-01f15512c0b3', title: '8', completed: false }, { id: '7cb1f381-9d6f-46f0-b77e-32b3b2b52d82', title: '72', completed: false }, { id: 'a5ba9fc8-0feb-4075-93c8-5e10ca0f57ec', title: '6', completed: false }, { id: '9237886e-8101-4cb4-86fe-5c344d93baa0', title: '5', completed: false }, { id: '30f93c0b-f3af-475d-8908-603f469bddc2', title: '4', completed: false }, { id: 'e1270010-1770-4ba8-9924-910c34123a55', title: '3', completed: false }, { id: 'ca14dc02-9129-44e6-a3fa-f0877c8e2713', title: '2', completed: false }, { id: '7dc4e625-d336-40d3-92f6-b73d12d84670', title: '1', completed: false }], filter: 'all' });
});

test('reducers', () => {
  let state;
  state = reducers({ tasks: [{ id: '60fc59c4-7475-4675-bcca-36a5f7d44349', title: '10', completed: false }, { id: 'ef80f372-8658-4b1a-a2f5-43bc8fb188e3', title: '9', completed: false }, { id: '445f82df-5bd3-461c-bc51-01f15512c0b3', title: '8', completed: false }, { id: '7cb1f381-9d6f-46f0-b77e-32b3b2b52d82', title: '72', completed: false }, { id: 'a5ba9fc8-0feb-4075-93c8-5e10ca0f57ec', title: '6', completed: false }, { id: '9237886e-8101-4cb4-86fe-5c344d93baa0', title: '5', completed: false }, { id: '30f93c0b-f3af-475d-8908-603f469bddc2', title: '4', completed: false }, { id: 'e1270010-1770-4ba8-9924-910c34123a55', title: '3', completed: false }, { id: 'ca14dc02-9129-44e6-a3fa-f0877c8e2713', title: '2', completed: false }, { id: '7dc4e625-d336-40d3-92f6-b73d12d84670', title: '1', completed: false }], filter: 'all' }, { type: 'CHANGE_FILTER', payload: { filter: 'active' } });
  expect(state).toEqual({ tasks: [{ id: '60fc59c4-7475-4675-bcca-36a5f7d44349', title: '10', completed: false }, { id: 'ef80f372-8658-4b1a-a2f5-43bc8fb188e3', title: '9', completed: false }, { id: '445f82df-5bd3-461c-bc51-01f15512c0b3', title: '8', completed: false }, { id: '7cb1f381-9d6f-46f0-b77e-32b3b2b52d82', title: '72', completed: false }, { id: 'a5ba9fc8-0feb-4075-93c8-5e10ca0f57ec', title: '6', completed: false }, { id: '9237886e-8101-4cb4-86fe-5c344d93baa0', title: '5', completed: false }, { id: '30f93c0b-f3af-475d-8908-603f469bddc2', title: '4', completed: false }, { id: 'e1270010-1770-4ba8-9924-910c34123a55', title: '3', completed: false }, { id: 'ca14dc02-9129-44e6-a3fa-f0877c8e2713', title: '2', completed: false }, { id: '7dc4e625-d336-40d3-92f6-b73d12d84670', title: '1', completed: false }], filter: 'active' });
});

test('reducers', () => {
  let state;
  state = reducers({ tasks: [{ id: '60fc59c4-7475-4675-bcca-36a5f7d44349', title: '10', completed: false }, { id: 'ef80f372-8658-4b1a-a2f5-43bc8fb188e3', title: '9', completed: false }, { id: '445f82df-5bd3-461c-bc51-01f15512c0b3', title: '8', completed: false }, { id: '7cb1f381-9d6f-46f0-b77e-32b3b2b52d82', title: '72', completed: false }, { id: 'a5ba9fc8-0feb-4075-93c8-5e10ca0f57ec', title: '6', completed: false }, { id: '9237886e-8101-4cb4-86fe-5c344d93baa0', title: '5', completed: false }, { id: '30f93c0b-f3af-475d-8908-603f469bddc2', title: '4', completed: false }, { id: 'e1270010-1770-4ba8-9924-910c34123a55', title: '3', completed: false }, { id: 'ca14dc02-9129-44e6-a3fa-f0877c8e2713', title: '2', completed: false }, { id: '7dc4e625-d336-40d3-92f6-b73d12d84670', title: '1', completed: false }], filter: 'active' }, { type: 'CHANGE_FILTER', payload: { filter: 'completed' } });
  expect(state).toEqual({ tasks: [{ id: '60fc59c4-7475-4675-bcca-36a5f7d44349', title: '10', completed: false }, { id: 'ef80f372-8658-4b1a-a2f5-43bc8fb188e3', title: '9', completed: false }, { id: '445f82df-5bd3-461c-bc51-01f15512c0b3', title: '8', completed: false }, { id: '7cb1f381-9d6f-46f0-b77e-32b3b2b52d82', title: '72', completed: false }, { id: 'a5ba9fc8-0feb-4075-93c8-5e10ca0f57ec', title: '6', completed: false }, { id: '9237886e-8101-4cb4-86fe-5c344d93baa0', title: '5', completed: false }, { id: '30f93c0b-f3af-475d-8908-603f469bddc2', title: '4', completed: false }, { id: 'e1270010-1770-4ba8-9924-910c34123a55', title: '3', completed: false }, { id: 'ca14dc02-9129-44e6-a3fa-f0877c8e2713', title: '2', completed: false }, { id: '7dc4e625-d336-40d3-92f6-b73d12d84670', title: '1', completed: false }], filter: 'completed' });
});

test('reducers', () => {
  let state;
  state = reducers({ tasks: [{ id: '60fc59c4-7475-4675-bcca-36a5f7d44349', title: '10', completed: false }, { id: 'ef80f372-8658-4b1a-a2f5-43bc8fb188e3', title: '9', completed: false }, { id: '445f82df-5bd3-461c-bc51-01f15512c0b3', title: '8', completed: false }, { id: '7cb1f381-9d6f-46f0-b77e-32b3b2b52d82', title: '72', completed: false }, { id: 'a5ba9fc8-0feb-4075-93c8-5e10ca0f57ec', title: '6', completed: false }, { id: '9237886e-8101-4cb4-86fe-5c344d93baa0', title: '5', completed: false }, { id: '30f93c0b-f3af-475d-8908-603f469bddc2', title: '4', completed: false }, { id: 'e1270010-1770-4ba8-9924-910c34123a55', title: '3', completed: false }, { id: 'ca14dc02-9129-44e6-a3fa-f0877c8e2713', title: '2', completed: false }, { id: '7dc4e625-d336-40d3-92f6-b73d12d84670', title: '1', completed: false }], filter: 'completed' }, { type: 'CHANGE_FILTER', payload: { filter: 'all' } });
  expect(state).toEqual({ tasks: [{ id: '60fc59c4-7475-4675-bcca-36a5f7d44349', title: '10', completed: false }, { id: 'ef80f372-8658-4b1a-a2f5-43bc8fb188e3', title: '9', completed: false }, { id: '445f82df-5bd3-461c-bc51-01f15512c0b3', title: '8', completed: false }, { id: '7cb1f381-9d6f-46f0-b77e-32b3b2b52d82', title: '72', completed: false }, { id: 'a5ba9fc8-0feb-4075-93c8-5e10ca0f57ec', title: '6', completed: false }, { id: '9237886e-8101-4cb4-86fe-5c344d93baa0', title: '5', completed: false }, { id: '30f93c0b-f3af-475d-8908-603f469bddc2', title: '4', completed: false }, { id: 'e1270010-1770-4ba8-9924-910c34123a55', title: '3', completed: false }, { id: 'ca14dc02-9129-44e6-a3fa-f0877c8e2713', title: '2', completed: false }, { id: '7dc4e625-d336-40d3-92f6-b73d12d84670', title: '1', completed: false }], filter: 'all' });
});


test('reducers', () => {
  let state;
  state = reducers({ tasks: [{ id: '60fc59c4-7475-4675-bcca-36a5f7d44349', title: '10', completed: false }, { id: 'ef80f372-8658-4b1a-a2f5-43bc8fb188e3', title: '9', completed: false }, { id: '445f82df-5bd3-461c-bc51-01f15512c0b3', title: '8', completed: false }, { id: '7cb1f381-9d6f-46f0-b77e-32b3b2b52d82', title: '72', completed: false }, { id: 'a5ba9fc8-0feb-4075-93c8-5e10ca0f57ec', title: '6', completed: false }, { id: '9237886e-8101-4cb4-86fe-5c344d93baa0', title: '5', completed: false }, { id: '30f93c0b-f3af-475d-8908-603f469bddc2', title: '4', completed: false }, { id: 'e1270010-1770-4ba8-9924-910c34123a55', title: '3', completed: false }, { id: 'ca14dc02-9129-44e6-a3fa-f0877c8e2713', title: '2', completed: false }, { id: '7dc4e625-d336-40d3-92f6-b73d12d84670', title: '1', completed: false }], filter: 'all' }, { type: 'DELETE_TASK', payload: { id: '9237886e-8101-4cb4-86fe-5c344d93baa0' } });
  expect(state).toEqual({ tasks: [{ id: '60fc59c4-7475-4675-bcca-36a5f7d44349', title: '10', completed: false }, { id: 'ef80f372-8658-4b1a-a2f5-43bc8fb188e3', title: '9', completed: false }, { id: '445f82df-5bd3-461c-bc51-01f15512c0b3', title: '8', completed: false }, { id: '7cb1f381-9d6f-46f0-b77e-32b3b2b52d82', title: '72', completed: false }, { id: 'a5ba9fc8-0feb-4075-93c8-5e10ca0f57ec', title: '6', completed: false }, { id: '30f93c0b-f3af-475d-8908-603f469bddc2', title: '4', completed: false }, { id: 'e1270010-1770-4ba8-9924-910c34123a55', title: '3', completed: false }, { id: 'ca14dc02-9129-44e6-a3fa-f0877c8e2713', title: '2', completed: false }, { id: '7dc4e625-d336-40d3-92f6-b73d12d84670', title: '1', completed: false }], filter: 'all' });
});

test('reducers', () => {
  let state;
  state = reducers({ tasks: [{ id: '60fc59c4-7475-4675-bcca-36a5f7d44349', title: '10', completed: false }, { id: '445f82df-5bd3-461c-bc51-01f15512c0b3', title: '8', completed: false }, { id: '7cb1f381-9d6f-46f0-b77e-32b3b2b52d82', title: '72', completed: false }, { id: 'a5ba9fc8-0feb-4075-93c8-5e10ca0f57ec', title: '6', completed: false }, { id: '30f93c0b-f3af-475d-8908-603f469bddc2', title: '4', completed: false }, { id: 'e1270010-1770-4ba8-9924-910c34123a55', title: '3', completed: true }, { id: 'ca14dc02-9129-44e6-a3fa-f0877c8e2713', title: '2', completed: false }, { id: '7dc4e625-d336-40d3-92f6-b73d12d84670', title: '1', completed: false }], filter: 'all' }, { type: 'TOGGLE_TASK', payload: { id: 'a5ba9fc8-0feb-4075-93c8-5e10ca0f57ec' } });
  expect(state).toEqual({ tasks: [{ id: '60fc59c4-7475-4675-bcca-36a5f7d44349', title: '10', completed: false }, { id: '445f82df-5bd3-461c-bc51-01f15512c0b3', title: '8', completed: false }, { id: '7cb1f381-9d6f-46f0-b77e-32b3b2b52d82', title: '72', completed: false }, { id: 'a5ba9fc8-0feb-4075-93c8-5e10ca0f57ec', title: '6', completed: true }, { id: '30f93c0b-f3af-475d-8908-603f469bddc2', title: '4', completed: false }, { id: 'e1270010-1770-4ba8-9924-910c34123a55', title: '3', completed: true }, { id: 'ca14dc02-9129-44e6-a3fa-f0877c8e2713', title: '2', completed: false }, { id: '7dc4e625-d336-40d3-92f6-b73d12d84670', title: '1', completed: false }], filter: 'all' });
});

test('reducers', () => {
  let state;
  state = reducers({ tasks: [{ id: '60fc59c4-7475-4675-bcca-36a5f7d44349', title: '10', completed: false }, { id: '445f82df-5bd3-461c-bc51-01f15512c0b3', title: '8', completed: false }, { id: '7cb1f381-9d6f-46f0-b77e-32b3b2b52d82', title: '72', completed: false }, { id: 'a5ba9fc8-0feb-4075-93c8-5e10ca0f57ec', title: '6', completed: true }, { id: '30f93c0b-f3af-475d-8908-603f469bddc2', title: '4', completed: false }, { id: 'e1270010-1770-4ba8-9924-910c34123a55', title: '3', completed: true }, { id: 'ca14dc02-9129-44e6-a3fa-f0877c8e2713', title: '2', completed: false }, { id: '7dc4e625-d336-40d3-92f6-b73d12d84670', title: '1', completed: false }], filter: 'all' }, { type: 'TOGGLE_TASK', payload: { id: '445f82df-5bd3-461c-bc51-01f15512c0b3' } });
  expect(state).toEqual({ tasks: [{ id: '60fc59c4-7475-4675-bcca-36a5f7d44349', title: '10', completed: false }, { id: '445f82df-5bd3-461c-bc51-01f15512c0b3', title: '8', completed: true }, { id: '7cb1f381-9d6f-46f0-b77e-32b3b2b52d82', title: '72', completed: false }, { id: 'a5ba9fc8-0feb-4075-93c8-5e10ca0f57ec', title: '6', completed: true }, { id: '30f93c0b-f3af-475d-8908-603f469bddc2', title: '4', completed: false }, { id: 'e1270010-1770-4ba8-9924-910c34123a55', title: '3', completed: true }, { id: 'ca14dc02-9129-44e6-a3fa-f0877c8e2713', title: '2', completed: false }, { id: '7dc4e625-d336-40d3-92f6-b73d12d84670', title: '1', completed: false }], filter: 'all' });
});
