import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './Components/LoginRegister/login';
import Homepage from './Components/Homepage/homepage';
import Reviews from './Components/ReviewPage/reviews';
import Medicine_Card from './Components/Cards/medicine_card';
import Service from './Components/ServicesContact/service';
import About from './Components/AboutPage/about';
import AdminDashboard from './Components/AdminDashboard/adminDashboard';

function App() {
  return (
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Login />} /> 
          <Route path="/homepage" element={<Homepage />} /> 
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/medicine" element={<Medicine_Card />} />
          <Route path="/service" element={<Service/>} />
          <Route path="/about" element={<About />} />
          <Route path="/adminDashboard" element={<AdminDashboard/>} />
        </Routes>

      </BrowserRouter>
  );
}

export default App;