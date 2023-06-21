import { legacy_createStore as createStore, combineReducers } from 'redux';
import notificationReducer from 'remote/notificationReducer';

const INCREMENT = 'INCREMENT';
const CLEAR = 'CLEAR';

export const incrementCount = () => ({
  type: INCREMENT,
});

export const clearCount = () => ({
  type: CLEAR,
});

function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case CLEAR:
      return { count: 0 };
    default:
      return state;
  }
}

const store = createStore(
  combineReducers({
    counter: counterReducer,
    notification: notificationReducer,
  })
);

export default store;
