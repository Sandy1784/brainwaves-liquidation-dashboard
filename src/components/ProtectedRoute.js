import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (user === null) {
    // Wait for localStorage to hydrate
    return <div className="text-center p-4">Loading...</div>;
  }

  return user ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
