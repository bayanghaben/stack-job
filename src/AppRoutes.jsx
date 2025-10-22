import React from "react";
import { Navigate, Route, Router, Routes } from "react-router";
import { routes } from "./routes";
import ProtectedRoute from "./components/common/ProtectedRoute";
import AppLayout from "./layout/Layout/AppLayout";
import AddJob from "./pages/AddJob";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useAuth } from "./context/AuthContext";
export default function AppRoutes() {
  const { isAuthenticated } = useAuth();
  return (
    <Routes>
      {/* {routes.map((route) =>
        route.protected ? (
          <Route
            path={route.path}
            element={<ProtectedRoute>{route.component}</ProtectedRoute>}
          />
        ) : (
          <Route path={route.path} element={route.component} />
        )
      )} */}
      <Route path="/" element={<ProtectedRoute />}>
        <Route index element={<Home />} />
        <Route path="new-job" element={<AddJob />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to={"/"} /> : <Login />}
      />
      <Route
        path="/register"
        element={isAuthenticated ? <Navigate to={"/"} /> : <Register />}
      />
    </Routes>
  );
}
