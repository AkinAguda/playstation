import React from "react";
import Background from "./components/Background";
import Navigation from "./components/Navigation";
import Menu from "./components/Menu";
import "./App.css";

const App = () => {
  return (
    <>
      <Background />
      <main>
        <Navigation />
        <Menu />
      </main>
    </>
  );
};

export default App;
