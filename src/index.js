import Input from "./component/Child1";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Parent from "./component/Parent";

const App = () => {
  return <Parent />;
};

ReactDOM.render(<App />, document.getElementById("root"));
