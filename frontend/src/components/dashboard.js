import React, { useEffect, useState } from 'react';
import axios from '../services/api';

function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/dashboard'); // Protected route
        setData(response.data);
      } catch (err) {
        console.error('Error fetching data', err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {data ? <p>Welcome to the dashboard!</p> : <p>Loading...</p>}
    </div>
  );
}

export default Dashboard;
