import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lander from './components/Lander/Lander'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Lander/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
