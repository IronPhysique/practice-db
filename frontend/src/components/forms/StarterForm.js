import React, { useState } from 'react';
import axios from '../../services/api';

function StarterForm() {
  const [starterData, setStarterData] = useState({ name: '', position: '', startDate: '' });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setStarterData({ ...starterData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://172.167.90.18:5000/api/submit', 
        { 
          name: starterData.name, 
          position: starterData.position, 
          start_date: starterData.startDate,  // Match backend key
          type: 'starter' 
        }
        /* Uncomment when JWT authentication is set up
        ,{
          headers: {
            Authorization: `Bearer ${token}`  // Add token to headers
          }
        }
        */
      );
      setMessage('Starter added successfully!');
      setError('');
      setStarterData({ name: '', position: '', startDate: '' });
    } catch (err) {
      setError('Failed to add starter. Please try again.');
      setMessage('');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="text-center mb-4">Add New Starter</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    name="name"
                    value={starterData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    name="position"
                    value={starterData.position}
                    onChange={handleChange}
                    placeholder="Position"
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    name="startDate"
                    value={starterData.startDate}
                    onChange={handleChange}
                    placeholder="Start Date (YYYY-MM-DD)"
                    type="date"
                    className="form-control"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">Add Starter</button>
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

export default StarterForm;
