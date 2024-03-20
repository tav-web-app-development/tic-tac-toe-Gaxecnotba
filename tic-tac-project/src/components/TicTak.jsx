import { useState } from "react";
import "./style.css";

export default function TicTac({ value, handleClick }) {
  return (
    <>
      <button className="square" onClick={handleClick}>
        {value}{" "}
      </button>
    </>
  );
}
