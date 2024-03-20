import { useState } from "react";
import "./style.css";

export default function ResetGame({ handleReset }) {
  return (
    <button id="restart-button" onClick={handleReset}>
      Reset Game
    </button>
  );
}
