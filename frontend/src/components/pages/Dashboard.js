import React, { useState, useEffect } from 'react';
import axios from '../../services/api';  // Assuming axios is configured here

const Dashboard = () => {
  const [starters, setStarters] = useState([]);  // State to store starters data
  const [leavers, setLeavers] = useState([]);  // State to store leavers data
  const [error, setError] = useState('');

  // Fetch the starters and leavers on component mount
  useEffect(() => {
    const fetchStarters = async () => {
      try {
        const response = await axios.get('http://172.167.90.18:5000/api/starters');  // Full URL
        setStarters(response.data);
      } catch (err) {
        setError('Error fetching starters');
      }
    };

    const fetchLeavers = async () => {
      try {
        const response = await axios.get('http://172.167.90.18:5000/api/leavers');  // Full URL
        setLeavers(response.data);
      } catch (err) {
        setError('Error fetching leavers');
      }
    };

    fetchStarters();
    fetchLeavers();
  }, []);  // Empty dependency array ensures this only runs on mount

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Dashboard: View Requests</h2>
      {error && <p className="text-danger">{error}</p>}

      <div className="row">
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
};

export default Dashboard;
