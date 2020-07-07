import React, { useState, Fragment } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

function getFinal(operation, first, second) {
  first = parseInt(first);
  second = parseInt(second);
  switch (operation) {
    case "ADD":
      return first + second;
    case "SUB":
      return first - second;
    case "MUL":
      return first * second;
    case "DIV":
      return first / second;
    default:
      return "";
  }
}

export default function Parent() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [operation, setOperation] = useState("");
  const [final, setFinal] = useState("");
  return (
    <Fragment>
      <Child1
        setFirst={(val) => setFirst(val)}
        setSecond={(val) => setSecond(val)}
        first={first}
        second={second}
        setOperation={(val) => {
          setOperation(val);
          setFinal(getFinal(val, first, second));
        }}
      />
      <Child2 final={final} />
    </Fragment>
  );
}
