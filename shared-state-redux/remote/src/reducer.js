const INCREMENT = 'INCREMENT';
const CLEAR = 'CLEAR';

export default function notificationReducer(state = { count: 3 }, action) {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case CLEAR:
      return { count: 0 };
    default:
      return state;
  }
}
