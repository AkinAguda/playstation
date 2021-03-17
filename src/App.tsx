import React from "react";
import Background from "./components/Background";
import Navigation from "./components/Navigation";
import Collection from "./components/Collection";
import Menu from "./components/Menu";
import "./App.css";

const App = () => {
  return (
    <>
      <Background />
      <main>
        <Navigation />
        <Menu />
        <Collection />
      </main>
    </>
  );
};

export default App;
