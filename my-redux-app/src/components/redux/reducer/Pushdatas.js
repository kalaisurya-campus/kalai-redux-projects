import { POPDATA, PUSHDATA } from "../actions/Actions";

export const pushDataMethod = (state = [], action) => {
  switch (action.type) {
    case PUSHDATA: {
      let data = [...state];
      data.push(action.value);
      return [...data];
    }
    case POPDATA: {
      let data = [...state];
      data.pop();
      return [...data];
    }
    default:
      return state;
  }
};

