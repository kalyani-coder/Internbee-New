// ProtectedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, authenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      element={authenticated ? <Component /> : <Navigate to="/" replace />}
    />
  );
};

export default ProtectedRoute;
