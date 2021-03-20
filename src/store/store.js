import { createStore } from 'redux';

function reducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    default:
      return state;
  }
}

const store = createStore(reducer);
export default store;
