import React from "react";
import { useScroll } from "./hooks/useScroll";

import Hero from "./components/Hero";
import Article from "./components/Article";

import "./styles/styles.scss";
import { useEffect } from "react";

function App() {
  const { scrollPosition, addScrollHandler } = useScroll();

  useEffect(() => {
    addScrollHandler();
  }, []);
  return (
    <div className="app">
      <Hero scrollPosition={scrollPosition} />
      <Article scrollPosition={scrollPosition} />
    </div>
  );
}

export default App;
