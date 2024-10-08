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
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" value={credentials.username} onChange={handleChange} placeholder="Username" />
        <input name="password" value={credentials.password} onChange={handleChange} placeholder="Password" type="password" />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;
