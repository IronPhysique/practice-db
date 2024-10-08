export const isAuthenticated = () => {
    const token = localStorage.getItem('jwtToken');
    return !!token;  // Return true if token exists
  };
  
  export const logout = () => {
    localStorage.removeItem('jwtToken');  // Clear token
  };
  