import { SET_USERDATA } from "../actions/Actions";

export const setUserData = (state=[], action) => {
  switch (action.type) {
    case SET_USERDATA: {
      return [...action.value];
    }
    default:
      return state;
  }
};
