import React, { Fragment } from "react";
import "./App.css";
import SomethingState from "./components/context/something/SomethingState";

const App = () => {
  return (
    <SomethingState>
      <Fragment>
        <div>Something</div>
      </Fragment>
    </SomethingState>
  );
};

export default App;
