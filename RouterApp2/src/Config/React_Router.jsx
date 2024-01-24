import React from 'react'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";
import About from '../Components/About';
import Contact from '../Components/Contact';
import Home from '../Components/Home';
import Products from '../Components/Products';
import ProductsDetail from '../Components/ProductsDetail';
  

export const React_Router = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route>
          <Route path="home" element={<Home />}/>
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="" element={<Products />} />
            <Route path="productdetail/:id" element={<ProductsDetail />} />


          </Route>
        )
      );

  return (
  <>
   
    <RouterProvider router={router}/>
    </>
  )
}
