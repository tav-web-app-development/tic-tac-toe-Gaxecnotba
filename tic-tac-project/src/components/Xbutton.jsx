import TicTac from "./TicTak";
import "./style.css";
import { useState } from "react";
import ResetGame from "./ResetGame";
export default function Board() {
  const [isX, setisX] = useState(true);
  const [values, setValues] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9].fill(""));
  const handleReset = () => {
    setValues(Array(9).fill(""));
    setisX(true);
  };

  const handleClick = (i) => {
    const nexts = values.slice();
    if (Winner(values) || values[i]) {
      return;
    }
    if (isX) {
      nexts[i] = "X";
    } else {
      nexts[i] = "O";
    }
    setValues(nexts);
    setisX(!isX);
  };
  return (
    <>
      <div id="board">
        <TicTac value={values[0]} handleClick={() => handleClick(0)} />
        <TicTac value={values[3]} handleClick={() => handleClick(3)} />
        <TicTac value={values[6]} handleClick={() => handleClick(6)} />

        <TicTac value={values[1]} handleClick={() => handleClick(1)} />
        <TicTac value={values[4]} handleClick={() => handleClick(4)} />
        <TicTac value={values[7]} handleClick={() => handleClick(7)} />

        <TicTac value={values[2]} handleClick={() => handleClick(2)} />
        <TicTac value={values[5]} handleClick={() => handleClick(5)} />
        <TicTac value={values[8]} handleClick={() => handleClick(8)} />

        <ResetGame handleReset={handleReset} />
      </div>
    </>
  );
}
function Winner(values) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (values[a] && values[a] === values[b] && values[a] === values[c]) {
      return values[a];
    }
  }
  return null;
}
