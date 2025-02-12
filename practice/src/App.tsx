import React from "react";
import "./App.css";
import Basic from "./components/Basic";
import Main from "./components/AdminInfo/Main";
import Todo from "./components/Todo/Todo";
import Form from "./components/Form/Form";
import CountBuffer from "./components/ContextState/CountBuffer";
import CounterReducer from "./components/Reducer/CountReducer";
import FetchData from "./components/Fetching/FetchData";
import Loader from "./components/Loader";
import Varients from "./components/Varients";
import Card from "./components/Animations/Card";

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
      {/* <FetchData /> */}
      {/* <Loader /> */}
      {/* <Varients /> */}
      <Card />
    </div>
  );
};

export default App;
