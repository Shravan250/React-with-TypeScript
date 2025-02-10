import React, { Suspense } from "react";
import FetchData from "./components/useHook/FetchData";

const App = () => {
  return (
    <Suspense>
      <FetchData />
    </Suspense>
  );
};

export default App;
