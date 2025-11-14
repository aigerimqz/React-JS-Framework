import { useState } from "react";
import About from "./pages/AboutUs/About";
import Home from "./pages/Home/Home";
import TourList from "./pages/Tours/TourList";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout/>}>
          <Route index element = {<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="tours" element={<TourList/>}/>
          {/* <Route path="login" element={<Login/>}/> */}
        </Route>
      </Routes>
    </BrowserRouter>


  //   <>
  //     <div className="section">
  //       <div className="container">
  //         <div className="header__section">
  //           <h1 className="header__title">WebSite</h1>
  //           <div className="header__navigation">
  //             <a href="#">Home</a>
  //             <a href="#">About</a>
  //             <a href="#">Blog</a>
  //           </div>
  //         </div>
  //         <Home></Home>
  //       </div>
  //     </div>
  //     <div className="container">
  //       <About></About>
  //       <TourList></TourList>
  //     </div>
      

  //   </>

  );
}

export default App;
