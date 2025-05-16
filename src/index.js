import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { mk1 } from "./mk1/mk1";
import { mk2 } from "./mk2/mk2";
import { mk3 } from "./mk3/mk3";
import { Navbar } from "./navbar/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router";

let router = createBrowserRouter([
  {
    path: "/",
    Component: Navbar,
  },
  {
    path: "/mk1",
    Component: mk1,
  },
  {
    path: "/mk2",
    Component: mk2,
  },
  {
    path: "/mk3",
    Component: mk3,
  },
  {
    path: "*",
    Component: Navbar,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
