import React, { useState, useEffect } from 'react';
import axios from '../../services/api';  // Assuming axios is configured here

const Dashboard = () => {
  const [starters, setStarters] = useState([]);
  const [leavers, setLeavers] = useState([]);
  const [error, setError] = useState('');

  // Fetch starters and leavers
  useEffect(() => {
    const fetchStarters = async () => {
      try {
        const response = await axios.get('http://172.167.90.18:5000/api/starters');
        setStarters(response.data);
      } catch (err) {
        setError('Error fetching starters');
      }
    };

    const fetchLeavers = async () => {
      try {
        const response = await axios.get('http://172.167.90.18:5000/api/leavers');
        setLeavers(response.data);
      } catch (err) {
        setError('Error fetching leavers');
      }
    };

    fetchStarters();
    fetchLeavers();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="header-title">Dashboard: View Requests</h2>
      {error && <p className="text-danger">{error}</p>}

      <div className="row">
        {/* Display Starters */}
        <div className="col-md-6">
          <h3 className="sub-header">Submitted Starters</h3>
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
          <h3 className="sub-header">Submitted Leavers</h3>
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
