import React from "react";
import { CountContextProvider } from "../../Context/CountContext";
import Counter from "./Counter";

const CountBuffer = () => {
  return (
    <CountContextProvider>
      <Counter />
    </CountContextProvider>
  );
};

export default CountBuffer;
