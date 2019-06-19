import React from "react";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import AboutMe from "./components/AboutMe";
import MySkills from "./components/MySkills";

function App() {
  return (
    <div className="App">
      <div className="fixed">
        <Navigation />
        <Home />
      </div>
      <div className="fullscreen">
        <div className="mask">
          <div className="about-me-box">
            <AboutMe />
            <MySkills />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
