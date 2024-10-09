import React, { useState } from 'react';
import axios from '../../services/api';
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
      localStorage.setItem('jwtToken', response.data.token);  
      navigate('/dashboard'); 
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="text-center mb-4">Login</h2>
              <form onSubmit={handleSubmit}>
                <input
                  name="username"
                  value={credentials.username}
                  onChange={handleChange}
                  placeholder="Username"
                  className="form-control"
                  required
                />
                <input
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  placeholder="Password"
                  type="password"
                  className="form-control"
                  required
                />
                <button type="submit" className="btn btn-primary w-100">Login</button>
              </form>
              {error && <p className="text-danger mt-3">{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
