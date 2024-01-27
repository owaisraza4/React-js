import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import MianComponent from "../Components/MianComponent";
import Pro_Deatils from "../Components/Pro_Deatils";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<MianComponent />} />
      <Route path="/pro/:id" element={<Pro_Deatils />} />
    </Route>
  )
);

const Router_App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Router_App;
