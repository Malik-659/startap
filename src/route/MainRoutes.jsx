import React from "react";
import { Route, Routes } from "react-router-dom";
import { PostsList } from "../components/posts/PostsList";
import { PostCreate } from "../components/posts/PostCreate";
import { PostEdit } from "../components/posts/PostEdit";
import ActiveCode from "../components/auth/ActivateCode";
import HomePage from "../pages/HomePage/HomePage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import Login from "../components/auth/Login";
import LoginPage from "../pages/LoginPage/LoginPage";

const MainRoutes = () => {
  const ROUTES = [
    {
      id: 1,
      path: "posts",
      element: <PostsList />,
    },
    {
      id: 2,
      path: "add-post",
      element: <PostCreate />,
    },
    {
      id: 3,
      path: "edit-post/:id",
      element: <PostEdit />,
    },
    {
      id:4,
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
      element: <LoginPage />,
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
