import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="" element={<PrivateRoutes />}>
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
      <Route path="" element={<PublicRoutes />}>
        <Route path="login" element={<Login />} />
      </Route>
    </Route>
  )
);
const Router_app = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Router_app;
