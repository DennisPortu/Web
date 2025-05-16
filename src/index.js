import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Mk1 } from "./mk1/mk1";
import { Mk2 } from "./mk2/mk2";
import { Mk3 } from "./mk3/mk3";
import { Navbar } from "./navbar/Navbar";

const Layout = () => (
  <>
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
  },
  {
    path: "/models",
    element: <Layout />,
    children: [
      {
        path: "mk1",
        element: <Mk1 />,
      },
      {
        path: "mk2",
        element: <Mk2 />,
      },
      {
        path: "mk3",
        element: <Mk3 />,
      },
      {
        path: "*",
        element: <Mk1 />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
