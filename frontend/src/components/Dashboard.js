import React, { useEffect, useState } from 'react';
import axios from '../services/api';

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/dashboard-data');  // Assuming this is a protected route
        setData(response.data);
      } catch (error) {
        console.error('Error fetching dashboard data', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      <h2>Dashboard</h2>
      <ul className="list-group">
        {data.map((item, index) => (
          <li key={index} className="list-group-item">{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
