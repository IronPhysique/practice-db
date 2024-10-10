import React, { useState } from 'react';
import StarterForm from '../forms/StarterForm';  // Import StarterForm component
import LeaverForm from '../forms/LeaverForm';  // Import LeaverForm component

const SubmitForms = () => {
  const [formType, setFormType] = useState(null);  // State to track form type (starter/leaver)

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
      <h2 className="text-center mb-4">Submit a New Request</h2>

      {/* Button group to select form type */}
      <div className="text-center mb-4">
        <button 
          className={`btn btn-primary me-2 ${formType === 'starter' ? 'active' : ''}`}
          onClick={() => setFormType('starter')}
        >
          Starter Form
        </button>
        <button 
          className={`btn btn-secondary ${formType === 'leaver' ? 'active' : ''}`}
          onClick={() => setFormType('leaver')}
        >
          Leaver Form
        </button>
      </div>

      {/* Render the selected form */}
      {renderForm()}
    </div>
  );
};

export default SubmitForms;
