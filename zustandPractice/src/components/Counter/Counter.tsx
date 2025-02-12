import React from "react";
import { useCounter } from "../../store";

interface Props {
  // Define your props here
}

const Counter: React.FC<Props> = () => {
  const { count, increment, decrement } = useCounter(); //useCounter((state) => state);

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
