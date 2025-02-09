import React, { createContext, FC, ReactNode, useState } from "react";

interface CountContextProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const CountContext = createContext<CountContextProps>({
  count: 0,
  increment: () => {},
  decrement: () => {},
});

interface ProviderProps {
  children: ReactNode;
}

const CountContextProvider: FC<ProviderProps> = ({ children }) => {
  const [count, setCounter] = useState(0);

  const increment = () => {
    setCounter((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCounter((prevCount) => prevCount - 1);
  };

  return (
    <CountContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CountContext.Provider>
  );
};

export { CountContextProvider, CountContext };
