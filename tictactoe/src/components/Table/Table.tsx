import "./Table.module.css";
import Button from "../Button/Button";
import calcWinner from "../Logic";

interface Props {
  // Define your props here
  buttons: Array<string>;
  xIsNext: boolean;
  onPlay: (nextButtons: Array<string>) => void;
}

const Table: React.FC<Props> = (props) => {
  const handleClick = (i: number) => {
    if (props.buttons[i] || calcWinner(props.buttons)) {
      return;
    }
    const nextButton = props.buttons.slice();
    if (props.xIsNext) {
      nextButton[i] = "X";
    } else {
      nextButton[i] = "O";
    }
    props.onPlay(nextButton);
  };

  const winner = calcWinner(props.buttons);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (props.xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="text-3xl text-center my-12">{status}</div>
      <div className="grid grid-cols-custom grid-rows-custom gap-0 w-fit m-auto">
        <Button onButtonClick={() => handleClick(0)} value={props.buttons[0]} />
        <Button onButtonClick={() => handleClick(1)} value={props.buttons[1]} />
        <Button onButtonClick={() => handleClick(2)} value={props.buttons[2]} />
        <Button onButtonClick={() => handleClick(3)} value={props.buttons[3]} />
        <Button onButtonClick={() => handleClick(4)} value={props.buttons[4]} />
        <Button onButtonClick={() => handleClick(5)} value={props.buttons[5]} />
        <Button onButtonClick={() => handleClick(6)} value={props.buttons[6]} />
        <Button onButtonClick={() => handleClick(7)} value={props.buttons[7]} />
        <Button onButtonClick={() => handleClick(8)} value={props.buttons[8]} />
      </div>
    </>
  );
};

export default Table;
