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
      const response = await axios.post('/signup', userData);
      setMessage('Verification email sent! Check your inbox.');
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (err) {
      setError('Signup failed, please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input name="email" value={userData.email} onChange={handleChange} placeholder="Email" type="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <input name="username" value={userData.username} onChange={handleChange} placeholder="Username" className="form-control" required />
        </div>
        <div className="mb-3">
          <input name="password" value={userData.password} onChange={handleChange} placeholder="Password" type="password" className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
      {message && <p className="text-success">{message}</p>}
      {error && <p className="text-danger">{error}</p>}
    </div>
  );
}

export default Signup;
