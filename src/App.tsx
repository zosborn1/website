import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './routes/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/about';
import Presentation from './routes/presentation';

function App() {
  return (
    <>
    <Navbar />

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/presentation" element={<Presentation/>} />
    </Routes>
    </>
  );
}

export default App;
