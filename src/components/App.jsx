import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Animal from "./Animal";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Animal selectedAnimal="dog" />
    </>
  );
}

export default App;
