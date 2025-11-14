import { useState } from "react";
import About from "./pages/AboutUs/About";
import Home from "./pages/Home/Home";
import TourList from "./pages/Tours/TourList";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import TourDetail from "./pages/Tours/TourDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element = {<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="tours" element={<TourList/>}/>
          <Route path="tours/:id" element={<TourDetail/>}/>
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
