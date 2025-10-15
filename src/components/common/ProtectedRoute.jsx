import React, { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext, useAuth } from "../../context/AuthContext";

function ProtectedRoute({ childern }) {
  console.log("ProtectedRoute");
  const { isAuthenticated } = useAuth();
  //   const isAuthenticated = true;
  return <div>{!isAuthenticated ? <Navigate to={"login"} /> : childern}</div>;
}

export default ProtectedRoute;
