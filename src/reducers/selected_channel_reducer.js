import { CHANGE_CHANNEL } from '../actions/index';

export default function selectedChannelReducer(state = null, action) {
  switch (action.type) {
    case CHANGE_CHANNEL:
      return action.payload;
    default:
      return state;
  }
}
