import React from "react";
import { Navigate } from "react-router-dom";

const LoginProtected = ({ loggedIn, children }) => {
  if (!loggedIn) {
    return <Navigate to={"/login"} replace />;
  }
  return children;
};

export default LoginProtected;
