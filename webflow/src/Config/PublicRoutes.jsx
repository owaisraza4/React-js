import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoutes = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
  return !isLoggedIn ? <Outlet/> : <Navigate   to="/"/>
  }

export default PublicRoutes