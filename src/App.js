// App.js (or your main component where routes are defined)
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FitPro from './Components/FitPro';
import LoginPage from './Components/Login'; // Example login page component
import SignUpPage from './Components/SignUp'; // Example sign-up page component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FitPro />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
};

export default App;
