import { useState } from "react";
import TicTac from "./components/TicTak";
import Board from "./components/Xbutton";
import "./App.css";

function App() {
  return (
    <>
      <h1 id="h1">Tic Tak Toe</h1>
      <div className="game-container">
        <Board />
      </div>
    </>
  );
}

export default App;
