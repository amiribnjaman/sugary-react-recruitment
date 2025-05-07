import React from "react";
import { Navigate } from "react-router-dom";

// This component checks if the user is authenticated by checking for a token in localStorage.
// If the token exists, it renders the children components (protected route).
// If the token does not exist, it redirects the user to the login page.
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("accessToken");
  return token ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
