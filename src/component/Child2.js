import React from "react";
export default function Child2(props) {
  return (
    <>
      <label>Final:</label> <input type="text" value={`${props.final}`}></input>
    </>
  );
}
