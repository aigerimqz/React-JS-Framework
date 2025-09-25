import { useState } from 'react'
import About from './components/AboutUs/About'
import './App.css'

function App() {
  
  return (
    <>
    <div className="container">
      <div className="header__section">
        <h1 className='header__title'>WebSite</h1>
        <div className="header__navigation">
          <a href="#">About Us</a>
          <a href="#">Home</a>
          <a href="#">Blog</a>
        </div>
      </div>
     <About></About>
    </div>
   
    </>
  )
}

export default App
