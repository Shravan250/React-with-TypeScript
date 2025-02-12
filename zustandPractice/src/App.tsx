import React from "react";
import Counter from "./components/Counter/Counter";
import RecipeBook from "./components/RecipeBook/RecipeBook";
import ExpanceTracker from "./components/ExpenseTracker/ExpanceTracker";
import Meals from "./components/Meals/Meals";

const App = () => {
  return (
    <div>
      {/* <Counter /> */}
      {/* {<RecipeBook />} */}
      {/* <ExpanceTracker /> */}
      <Meals />
    </div>
  );
};

export default App;
