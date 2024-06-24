import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import Home from "./pages/Home/home.tsx";
import Register from "./pages/Register/register.tsx";
import SignIn from "./pages/SignIn/signIn.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path : "/home",
    element: <Home />,
  },
  {
    path : "/register",
    element: <Register />,
  },
  {
    path : "/login",
    element: <SignIn />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
