import { TYPE0, TYPE1 } from "../types";

export default (state, action) => {
  switch (action.type) {
    case TYPE0:
      return {
        ...state,
        state: [...state.state, action.payload]
      };
    case TYPE1:
      return {
        ...state,
        state: [...state.state, action.payload]
      };
    default:
      return state;
  }
};
