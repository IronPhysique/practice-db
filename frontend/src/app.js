import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
// import Login from './components/pages/Login';
import Signup from './components/pages/Signup';  // Import Signup component
import Dashboard from './components/pages/Dashboard';
import PrivateRoute from './components/routes/PrivateRoute';
import Navbar from './components/pages/Navbar';  // Adding a navigation bar
import StarterForm from './components/forms/StarterForm';
import LeaverForm from './components/forms/LeaverForm';

const App = () => {
  return (
    <Router>
      <Navbar />  {/* Adding a navbar */}
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />  {/* Add the signup route */}
        <Route path="/dashboard" element={<Dashboard />} />  {/* add this when auth needs to be readded element={<PrivateRoute><Dashboard /></PrivateRoute>} />*/}
      </Routes>
    </Router>
  );
};

export default App;
