import React from 'react';
import StarterForm from '../forms/StarterForm';  // Import StarterForm component
import LeaverForm from '../forms/LeaverForm';  // Import LeaverForm component

function Dashboard() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Dashboard</h2>
      <div className="row">
        <div className="col-md-6">
          <StarterForm />  {/* Render StarterForm */}
        </div>
        <div className="col-md-6">
          <LeaverForm />  {/* Render LeaverForm */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
