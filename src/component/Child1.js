import React, { useState, useEffect } from "react";

const validate = (value, isEmptyAllow) => {
  return (isEmptyAllow || value !== "") && value.match(/[0-9]/g);
};

export default function Input(props) {
  const [errorA, setErrorA] = useState(false);
  const [errorB, setErrorB] = useState(false);

  return (
    <div>
      <label>A : </label>
      <input
        type="text"
        onChange={(event) => {
          if (validate(event.target.value, true)) {
            setErrorA(false);
            props.setFirst(event.target.value);
          } else {
            setErrorA(true);
          }
        }}
      ></input>
      {errorA && <label style={{ color: "red" }}>Invalid</label>}

      <label>B : </label>
      <input
        type="text"
        onChange={(event) => {
          if (validate(event.target.value, true)) {
            setErrorB(false);
            props.setSecond(event.target.value);
          } else {
            setErrorB(true);
          }
        }}
      ></input>
      {errorB && <label style={{ color: "red" }}>Invalid</label>}
      <button
        onClick={() => {
          console.log("dinesh======", props.first !== "", " = ", props.second);
          if (!validate(props.first, false)) {
            setErrorA(true);
          }
          if (!validate(props.second, false)) {
            setErrorB(true);
          }
          if (!(errorA || errorB)) {
            // !(false || flase) => true
            props.setOperation("ADD");
          }
        }}
      >
        Add
      </button>
      <button onClick={() => props.setOperation("SUB")}>Subtract</button>
      <button onClick={() => props.setOperation("MUL")}>MULTIPLE</button>
      <button onClick={() => props.setOperation("DIV")}>divide</button>
    </div>
  );
}

{
  /* <label>B : </label><input type="text" ></input> */
}
