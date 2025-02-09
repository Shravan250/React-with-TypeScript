import React from "react";
import "./App.css";
import Basic from "./components/Basic";
import Main from "./components/AdminInfo/Main";
import Todo from "./components/Todo/Todo";
import Form from "./components/Form/Form";
import CountBuffer from "./components/ContextState/CountBuffer";
import CounterReducer from "./components/Reducer/CountReducer";
import FetchData from "./components/Fetching/FetchData";

const App = () => {
  return (
    <div>
      {/* <Basic name={"Akash"} age={20} isStudent={true} /> */}
      {/* <Basic>
        <p>Hello</p> //children
      </Basic> */}
      {/* <Main /> */}
      {/* <Todo /> */}
      {/* <Form /> */}
      {/* <CountBuffer /> */}
      {/* <CounterReducer /> */}
      <FetchData />
    </div>
  );
};

export default App;
