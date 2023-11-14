import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/auth/Login";
import ActiveCode from "../components/auth/ActivateCode";
import HomePage from "../pages/HomePage/HomePage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import SummaryPage from "../pages/SummaryPage/SummaryPage";

const MainRoutes = () => {
  const ROUTES = [
    {
      id: 1,
      path: "/",
      element: <HomePage />,
    },
    {
      id: 777,
      path: "/sign-up",
      element: <RegisterPage />,
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
    {
      id: 200,
      path: "/users/:id",
      element: <SummaryPage />,
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
