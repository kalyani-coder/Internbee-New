// AuthWrapper.js
import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';

const AuthWrapper = ({ element: Component, ...rest }) => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated (you may use your authentication logic here)
    const token = localStorage.getItem('token');
    setAuthenticated(!!token);
  }, []);

  return <Route {...rest} element={<Component authenticated={authenticated} />} />;
};

export default AuthWrapper;
