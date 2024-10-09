import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  // Temporary bypass for login
  useEffect(() => {
    // Directly navigate to the dashboard on component mount
    navigate('/dashboard');
  }, [navigate]);

  return null;  // No need to render anything as we're bypassing the login for now
}

export default Login;
