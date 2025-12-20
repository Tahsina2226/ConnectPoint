import { Navigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext.jsx";
import PropTypes from "prop-types"; // ✅ import PropTypes

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return null; // optional: show a loading spinner

  if (!user) {
    return <Navigate to="/login" replace />; // redirect if not logged in
  }

  return children;
};

// ✅ Add propTypes validation
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
