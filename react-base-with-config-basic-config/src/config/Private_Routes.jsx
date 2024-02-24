import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const user = true
const Private_Routes = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return (
    user && isLoggedIn ? <Outlet /> : <Navigate to='/signup' />
  
  )
}

export {Private_Routes}
