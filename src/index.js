import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Random from './Random';


let router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/dennis",
    Component: Random,
  },
  {
    path: "*",
    Component: App,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

