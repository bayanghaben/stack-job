import React from "react";
import { Route, Router, Routes } from "react-router";
import { routes } from "./routes";
import ProtectedRoute from "./components/common/ProtectedRoute";
export default function AppRoutes() {
  return (
    <Routes>
      {routes.map((route) =>
        route.protected ? (
          <Route
            path={route.path}
            element={<ProtectedRoute>{route.component}</ProtectedRoute>}
          />
        ) : (
          <Route path={route.path} element={route.component} />
        )
      )}
    </Routes>
  );
}
