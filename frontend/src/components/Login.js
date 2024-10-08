import React, { useState } from 'react';
import axios from '../services/api';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/login', credentials);
      localStorage.setItem('jwtToken', response.data.token); // Store JWT
      navigate('/dashboard'); // Redirect to dashboard
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input name="username" value={credentials.username} onChange={handleChange} placeholder="Username" className="form-control" required />
        </div>
        <div className="mb-3">
          <input name="password" value={credentials.password} onChange={handleChange} placeholder="Password" type="password" className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      {error && <p className="text-danger">{error}</p>}
    </div>
  );
}

export default Login;
