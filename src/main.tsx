import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Conditions,
  ErrorPage,
  Groups,
  Home,
  Login,
  Signup,
  Therapist,
} from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <ErrorPage /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/conditions", element: <Conditions /> },
  { path: "/groups", element: <Groups /> },
  { path: "/therapist", element: <Therapist /> },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
