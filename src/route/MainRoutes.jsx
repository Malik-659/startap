import React from "react";
import { Route, Routes } from "react-router-dom";
import { PostsList } from "../components/posts/PostsList";
import { PostCreate } from "../components/posts/PostCreate";
import { PostEdit } from "../components/posts/PostEdit";

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
