import { Navigate } from "react-router-dom";
import useToken from "../Hooks/verifyToken";

const ProtectedRoute = ({ children }) => {
  const token = useToken();

  if (!token) {
    // If no token is found, redirect to the login page
    return <Navigate to="/login" />;
  }

  // If token is found, render the children (protected component)
  return children;
};

export default ProtectedRoute;
