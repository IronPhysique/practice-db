import React, { useState } from 'react';
import StarterForm from '../forms/StarterForm';
import LeaverForm from '../forms/LeaverForm';

function Dashboard() {
  const [formType, setFormType] = useState(null);  // Tracks which form is selected (Starter/Leaver)

  // Function to render the selected form
  const renderForm = () => {
    if (formType === 'starter') {
      return <StarterForm />;
    } else if (formType === 'leaver') {
      return <LeaverForm />;
    }
    return null;
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Dashboard</h2>

      {/* Button group to select form type */}
      <div className="text-center mb-4">
        <button 
          className={`btn btn-primary me-2 ${formType === 'starter' ? 'active' : ''}`}
          onClick={() => setFormType('starter')}
        >
          Create Starter
        </button>
        <button 
          className={`btn btn-secondary ${formType === 'leaver' ? 'active' : ''}`}
          onClick={() => setFormType('leaver')}
        >
          Create Leaver
        </button>
      </div>

      {/* Render the selected form */}
      {renderForm()}
    </div>
  );
}

export default Dashboard;
