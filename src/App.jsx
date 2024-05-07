import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login';
import Homepage from './homepage';

function App() {
  return (
      <Router>

        <Routes>


          <Route path="/" element={<Login />} /> 
          <Route path="/Homepage" element={<Homepage />} /> 

        </Routes>

      </Router>
  );
}

export default App;