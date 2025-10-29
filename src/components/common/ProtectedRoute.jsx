import React from 'react'
import { Navigate, Outlet } from 'react-router'
import { useAuth } from '../../context/AuthContext'
import NavBar from '../../layout/NavBar/NavBar'
import SideMenu from '../../layout/SideMenu/SideMenu'

function ProtectedRoute() {
  const { isAuthenticated } = useAuth()
  return (
    <div>
      {!isAuthenticated ? (
        <Navigate to={'login'} />
      ) : (
        <div>
          <div>
            <NavBar />
            <div style={{ display: 'flex' }}>
              <SideMenu />
              <Outlet />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProtectedRoute
