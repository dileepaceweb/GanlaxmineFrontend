import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FitPro from './Components/FitPro';
import LoginPage from './Components/Login'; 
import SignUpPage from './Components/SignUp'; 
import Welcome from './Components/Welcome';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FitPro />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </Router>
  );
};

export default App;
