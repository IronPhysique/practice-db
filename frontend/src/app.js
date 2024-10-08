import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import Login from './components/login';
import Signup from './components/signup';  // Import Signup component
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/navbar';  // Adding a navigation bar

const App = () => {
  return (
    <Router>
      <Navbar />  {/* Adding a navbar */}
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />  {/* Add the signup route */}
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      </Routes>
    </Router>
  );
};

export default App;
