import { SET_MESSAGES, NEW_MESSAGES, FETCH_MESSAGES } from '../actions/index';

export default function messagesReducer(state = null, action) {
  switch (action.type) {
    case SET_MESSAGES:
      return action.payload.messages;
    case NEW_MESSAGES:
      return action.payload;
    case FETCH_MESSAGES:
      return action.payload.messages;
    default:
      return state;
  }
}
