import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Main } from "./main/Main";
import { createBrowserRouter, RouterProvider } from "react-router";

let router = createBrowserRouter([
  {
    path: "/",
    Component: Main,
  },
  {
    path: "*",
    Component: Main,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
