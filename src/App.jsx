import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './Components/LoginRegister/login';
import Homepage from './Components/Homepage/homepage';

function App() {
  return (
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Login />} /> 
          <Route path="/Homepage" element={<Homepage />} /> 
        </Routes>

      </BrowserRouter>
  );
}

export default App;