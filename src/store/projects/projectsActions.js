import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getTotalPages } from "../../helpers/functions";
import { PROJECTS_API } from "../../helpers/const";

export const getProjects = createAsyncThunk(
  "projects/getProjects",
  async (_, { getState }) => {
    const { currentPage } = getState().projects;
    const pagesLimitParams = `?_page=${currentPage}&_limit=8`;
    const totalPages = await getTotalPages(PROJECTS_API);
    const { data } = await axios.get(`${PROJECTS_API}${pagesLimitParams}`);
    return { data, totalPages };
  }
);

export const getOneProject = createAsyncThunk(
  "projects/getOneProject",
  async ({ id }) => {
    const { data } = await axios.get(`${PROJECTS_API}/${id}`);
    return data;
  }
);

export const createProject = createAsyncThunk(
  "projects/createProject",
  async ({ project }, { dispatch }) => {
    await axios.post(PROJECTS_API, project);
    dispatch(getProjects());
  }
);

export const editProject = createAsyncThunk(
  "projects/editProject",
  async ({ project }, { dispatch }) => {
    await axios.patch(`${PROJECTS_API}/${project.id}`, project);
    dispatch(getProjects());
  }
);

export const deleteProject = createAsyncThunk(
  "projects/deleteProject",
  async ({ id }, { dispatch }) => {
    await axios.delete(`${PROJECTS_API}/${id}`);
    dispatch(getProjects());
  }
);
