import React from "react";
import { Route, Routes } from "react-router-dom";
import { PostsList } from "../components/posts/PostsList";
import { PostCreate } from "../components/posts/PostCreate";
import { PostEdit } from "../components/posts/PostEdit";
import ActiveCode from "../components/auth/ActivateCode";
import HomePage from "../pages/HomePage/HomePage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import SummaryPage from "../pages/SummaryPage/SummaryPage";
import Login from "../components/auth/Login";
import LoginPage from "../pages/LoginPage/LoginPage";
import CreateProject from "../components/projects/CreateProject/CreateProject";
import EditProject from "../components/projects/EditProject/EditProject";
import ProjectList from "../components/projects/ProjectList/ProjectList";
import ProjectDetails from "../components/projects/ProjectDetails/ProjectDetails";
import { PostDetails } from "../components/posts/PostDetails";

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
      id: 5,
      path: "/post-details/:id",
      element: <PostDetails />,
    },
    {
      id: 4,
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
    {
      id: 202,
      path: "/projects",
      element: <ProjectList />,
    },
    {
      id: 203,
      path: "/projects/:id",
      element: <ProjectDetails />,
    },
    {
      id: 204,
      path: "/add-project",
      element: <CreateProject />,
    },
    {
      id: 205,
      path: "/projects-edit/:id",
      element: <EditProject />,
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
