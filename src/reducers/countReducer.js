import { INCREMENT } from '../actions/actionTypes';

let initialState = {
    value: 0
}

export default function increment(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
          value: state.value + action.amount
      };
    default:
      return state;
  }
}