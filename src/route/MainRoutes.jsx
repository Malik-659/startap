import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";
import ActiveCode from "../components/auth/ActivateCode";
import HomePage from "../pages/HomePage/HomePage";

const MainRoutes = () => {
  const ROUTES = [
    {
      id: 1,
      path: "/",
      element:<HomePage/>,
    },
    {
      id: 777,
      path: "/sign-up",
      element: <Register />,
    },
    {
      id: 778,
      path: "/sign-in",
      element: <Login />,
    },
    {
      id: 779,
      path: "/activate-code",
      element: <ActiveCode />,
    },
  ];
  return (
    <Routes>
      {ROUTES.map((route) => (
        <Route key={route.id} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
