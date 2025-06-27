import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lander from './components/Lander/Lander'
import Lost from './components/Lost';
import Courses from './components/Courses';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Lander/>}></Route>
          <Route path="/*" element={<Lost/>}></Route>
          <Route path="/courses" element={<Courses />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
