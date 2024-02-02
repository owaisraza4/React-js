import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Chart from "../Pages/Chart";
import Customers from "../Pages/Customers";
import Dashboard from "../Pages/Dashboard";
import Deposits from "../Pages/Deposits";
import Layout from "../Pages/Layout";
import Orders from "../Pages/Orders";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="dashboard">
        <Route path="" element={<Dashboard />} />
        <Route path="chart" element={<Chart />} />
        <Route path="customer" element={<Customers />} />

        <Route path="order" element={<Orders />} />
        <Route path="deposits" element={<Deposits />} />
        <Route path="order" element={<Orders />} />
        <Route path="customer" />

     
      </Route>
    </Route>
  )
);

const Router_App = () => {
  return <RouterProvider router={router} />;
};

export default Router_App;
