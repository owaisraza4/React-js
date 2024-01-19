import React from 'react'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";
import Home from '../Components/Home';
import Login from '../Components/Login';
import Signup from '../Components/Signup';

  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
        <Route path='home' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='' element={<Signup/>}/>


        </Route>
    )
  );

const React_route = () => {
 
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default React_route;
