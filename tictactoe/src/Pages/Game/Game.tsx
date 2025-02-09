import React, { useState } from "react";
import Table from "../../components/Table/Table";
import styles from "./Game.module.css";

interface Props {
  // Define your props here
}

const Game: React.FC<Props> = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentButtons = history[currentMove];

  const xIsNext = currentMove % 2 === 0;

  function handlePlay(nextButtons: Array<string | null>) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextButtons];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((_, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move} className={styles.buttons}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="flex items-center flex-col justify-between p-4">
      <h1 className="text-4xl md:text-5xl my-4">Tic Tac Toe</h1>
      <hr className="w-full" />
      <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-3/4">
        <div className="flex justify-center flex-col w-fit">
          <Table
            xIsNext={xIsNext}
            buttons={currentButtons}
            onPlay={handlePlay}
          />
        </div>
        <div className="flex items-center gap-2 flex-col mt-4 md:mt-0">
          <h2 className="text-2xl md:text-3xl text-center my-4">
            Time Travel Button
          </h2>
          <ol className="flex gap-1 flex-col">{moves}</ol>
        </div>
      </div>
    </div>
  );
};

export default Game;
