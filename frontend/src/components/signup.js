import React, { useState } from 'react';
import axios from '../services/api';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [userData, setUserData] = useState({ email: '', username: '', password: '' });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/signup', userData);  // Backend route to handle signup
      setMessage('Verification email sent! Check your inbox.');
      setTimeout(() => {
        navigate('/login');  // Redirect to login after signup
      }, 3000);
    } catch (err) {
      setError('Signup failed, please try again.');
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" value={userData.email} onChange={handleChange} placeholder="Email" type="email" />
        <input name="username" value={userData.username} onChange={handleChange} placeholder="Username" />
        <input name="password" value={userData.password} onChange={handleChange} placeholder="Password" type="password" />
        <button type="submit">Sign Up</button>
      </form>
      {message && <p>{message}</p>}
      {error && <p>{error}</p>}
    </div>
  );
}

export default Signup;
