import React, { useState, useEffect } from 'react';
import axios from '../../services/api';
import StarterForm from '../forms/StarterForm';  // Import StarterForm component
import LeaverForm from '../forms/LeaverForm';  // Import LeaverForm component

function Dashboard() {
  const [starters, setStarters] = useState([]);  // State to store starters data
  const [leavers, setLeavers] = useState([]);  // State to store leavers data
  const [error, setError] = useState('');

  // Fetch the starters and leavers on component mount
  useEffect(() => {
    const fetchStarters = async () => {
      try {
        const response = await axios.get('/api/starters');
        setStarters(response.data);
      } catch (err) {
        setError('Error fetching starters');
      }
    };

    const fetchLeavers = async () => {
      try {
        const response = await axios.get('/api/leavers');
        setLeavers(response.data);
      } catch (err) {
        setError('Error fetching leavers');
      }
    };

    fetchStarters();
    fetchLeavers();
  }, []);  // Empty dependency array ensures this only runs on mount

  return (
    <div className="container">
      <h2 className="text-center mb-4">Dashboard</h2>
      <div className="row">
        {/* Render Forms */}
        <div className="col-md-6">
          <StarterForm />  {/* Render StarterForm */}
        </div>
        <div className="col-md-6">
          <LeaverForm />  {/* Render LeaverForm */}
        </div>
      </div>

      {/* Display Submitted Starters and Leavers */}
      {error && <p className="text-danger">{error}</p>}

      <div className="row mt-5">
        {/* Display Starters */}
        <div className="col-md-6">
          <h3>Submitted Starters</h3>
          <ul className="list-group">
            {starters.length === 0 ? (
              <li className="list-group-item">No starters found</li>
            ) : (
              starters.map(starter => (
                <li key={starter.id} className="list-group-item">
                  {starter.name} - {starter.position} (Start Date: {starter.start_date})
                </li>
              ))
            )}
          </ul>
        </div>

        {/* Display Leavers */}
        <div className="col-md-6">
          <h3>Submitted Leavers</h3>
          <ul className="list-group">
            {leavers.length === 0 ? (
              <li className="list-group-item">No leavers found</li>
            ) : (
              leavers.map(leaver => (
                <li key={leaver.id} className="list-group-item">
                  {leaver.name} - {leaver.position} (Leave Date: {leaver.leave_date})
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
