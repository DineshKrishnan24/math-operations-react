import React from "react";

export default function Input(props) {
  return (
    <div>
      <label>A : </label>
      <input
        type="text"
        onChange={(event) => {
          props.setFirst(event.target.value);
        }}
      ></input>

      <label>B : </label>
      <input
        type="text"
        onChange={(event) => {
          props.setSecond(event.target.value);
        }}
      ></input>
      <button onClick={() => props.setOperation("ADD")}>Add</button>
      <button onClick={() => props.setOperation("SUB")}>Subtract</button>
      <button onClick={() => props.setOperation("MUL")}>MULTIPLE</button>
      <button onClick={() => props.setOperation("DIV")}>divide</button>
    </div>
  );
}

{
  /* <label>B : </label><input type="text" ></input> */
}
