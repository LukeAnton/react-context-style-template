import React, { useReducer } from "react";
import SomethingReducer from "./somethingReducer";
import somethingContext from "./somethingContext";

import { TYPE0, TYPE1 } from "../types";

const ContactState = props => {
  const initialState = {
    state: "something"
  };

  // Some dispatch function
  const someFunction = () => {
    dispatch({ type: CLEAR_FILTER, payload: something });
  };

  return (
    <SomethingContext.Provider
      value={{
        state: state.state
      }}
    >
      {props.children}
    </SomethingContext.Provider>
  );
};

export default SomethingState;
