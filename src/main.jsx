import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./components/Root";
import Home from "./components/Home";
import Login from "./components/Login";
import AppliedJobs from "./components/AppliedJobs";
import JobDetailes from "./components/JobDetailes";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/appliedjobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('/jobs.json')
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/job/:id",
        element: <JobDetailes></JobDetailes>,
        loader: () => fetch('/jobs.json')
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>

      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);