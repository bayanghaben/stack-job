import React, { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router";
import { AuthContext, useAuth } from "../../context/AuthContext";
import NavBar from "../../layout/NavBar/NavBar";
import SideMenu from "../../layout/SideMenu/SideMenu";

function ProtectedRoute() {
  console.log("ProtectedRoute");
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated);
  useEffect(() => {
    console.log(isAuthenticated, "isAuthenticated");
  }, [isAuthenticated]);
  //   const isAuthenticated = true;
  return (
    <div>
      {!isAuthenticated ? (
        <Navigate to={"login"} />
      ) : (
        <div>
          <div>
            <NavBar />
            <div style={{ display: "flex" }}>
              <SideMenu />
              <Outlet />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProtectedRoute;
