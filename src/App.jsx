import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lander from './components/Lander/Lander'
import Lost from './components/404/Lost';
import Courses from './components/Courses/Courses';
import About from './components/About/About'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Lander/>}></Route>
          <Route path="/*" element={<Lost/>}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
