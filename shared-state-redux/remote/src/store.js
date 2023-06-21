import { legacy_createStore as createStore, combineReducers } from 'redux';
import notificationReducer from './reducer';

const store = createStore(
  combineReducers({
    notification: notificationReducer,
  })
);

export default store;
