import React, { useState } from 'react';
import axios from '../../services/api';
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
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="text-center mb-4">Sign Up</h2>
              <form onSubmit={handleSubmit}>
                <input
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  type="email"
                  className="form-control"
                  required
                />
                <input
                  name="username"
                  value={userData.username}
                  onChange={handleChange}
                  placeholder="Username"
                  className="form-control"
                  required
                />
                <input
                  name="password"
                  value={userData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  type="password"
                  className="form-control"
                  required
                />
                <button type="submit" className="btn btn-primary w-100">Sign Up</button>
              </form>
              {message && <p className="text-success mt-3">{message}</p>}
              {error && <p className="text-danger mt-3">{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
