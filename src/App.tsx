import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from './components/login/LoginPage';
import Home from './components/home/Home';





function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Home/:username" element={<Home />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
