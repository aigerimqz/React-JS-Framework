import { useState } from "react";
import About from "./components/AboutUs/About";
import Home from "./components/Home/Home";
import "./App.css";

function App() {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="header__section">
            <h1 className="header__title">WebSite</h1>
            <div className="header__navigation">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Blog</a>
            </div>
          </div>
          <Home></Home>
        </div>
      </div>
      <div className="container">
        <About></About>
      </div>
    </>
  );
}

export default App;
