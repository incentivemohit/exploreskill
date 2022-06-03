import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "./Context/UserAuthContext";

function ProtectedRoutes({ children }) {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
  }
  return children;
}

export default ProtectedRoutes;
