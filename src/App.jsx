import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lander from './components/Lander/Lander'
import Lost from './Lost';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Lander/>}></Route>
          <Route path="/*" element={<Lost/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
