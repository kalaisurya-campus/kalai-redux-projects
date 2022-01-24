import { DECREMENTS, INCREMENTS } from "../actions/Actions";

const initialState = {
  count: 0,
};
export const reducerData = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENTS: {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case DECREMENTS: {
      return {
        ...state,
        count: state.count - 1,
      };
    }
    default:
      return state;
  }
};
