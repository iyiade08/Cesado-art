import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuth = localStorage.getItem("currentUserEmail");
  return isAuth ? children : <Navigate to="/signup" replace />;
};

export default ProtectedRoute;
