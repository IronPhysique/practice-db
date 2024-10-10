import React, { useState } from 'react';
import axios from '../../services/api';

function LeaverForm() {
  const [leaverData, setLeaverData] = useState({ name: '', position: '', leaveDate: '' });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setLeaverData({ ...leaverData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://172.167.90.18:5000/api/submit', 
        { 
          name: leaverData.name, 
          position: leaverData.position, 
          leave_date: leaverData.leaveDate,  // Match backend key
          type: 'leaver' 
        }
        /* Uncomment when JWT authentication is set up
        ,{
          headers: {
            Authorization: `Bearer ${token}`  // Add token to headers
          }
        }
        */
      );
      setMessage('Leaver added successfully!');
      setError('');
      setLeaverData({ name: '', position: '', leaveDate: '' });
    } catch (err) {
      setError('Failed to add leaver. Please try again.');
      setMessage('');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="text-center mb-4">Add New Leaver</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    name="name"
                    value={leaverData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    name="position"
                    value={leaverData.position}
                    onChange={handleChange}
                    placeholder="Position"
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    name="leaveDate"
                    value={leaverData.leaveDate}
                    onChange={handleChange}
                    placeholder="Leave Date (YYYY-MM-DD)"
                    type="date"
                    className="form-control"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">Add Leaver</button>
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

export default LeaverForm;
