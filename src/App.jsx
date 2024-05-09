import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './Components/LoginRegister/login';
import Homepage from './Components/Homepage/homepage';
import Reviews from './Components/ReviewPage/reviews';
import Medicine_Card from './Components/Cards/medicine_card';
function App() {
  return (
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Login />} /> 
          <Route path="/homepage" element={<Homepage />} /> 
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/medicine" element={<Medicine_Card />} />
        </Routes>

      </BrowserRouter>
  );
}

export default App;