import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import ProtectedRoute from './components/common/ProtectedRoute'
import AddJob from './pages/AddJob'
import Profile from './pages/Profile'
import Register from './pages/Register'
import Home from './pages/Home'
import Login from './pages/Login'
import Todo from './pages/Todo'
import { useAuth } from './context/AuthContext'
export default function AppRoutes() {
  const { isAuthenticated } = useAuth()
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
      <Route path='/' element={<ProtectedRoute />}>
        <Route index element={<Home />} />
        <Route path='new-job' element={<AddJob />} />
        <Route path='profile' element={<Profile />} />
        <Route path='todo' element={<Todo />} />
      </Route>
      <Route
        path='/login'
        element={isAuthenticated ? <Navigate to={'/'} /> : <Login />}
      />
      <Route
        path='/register'
        element={isAuthenticated ? <Navigate to={'/'} /> : <Register />}
      />
    </Routes>
  )
}
