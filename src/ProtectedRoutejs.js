import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  console.log("ProtectedRoute → user:", user);

  if (user === undefined) {
    return <div className="p-4 text-center">Checking login status...</div>; // still loading
  }

  return user ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
