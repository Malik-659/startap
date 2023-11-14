import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TEAMS_API, VACANCIES_API, WORKS_API } from "../../helpers/const";

const API = [TEAMS_API, WORKS_API, VACANCIES_API];

export const getPosts = createAsyncThunk("posts/getPosts", async (type) => {
  const { data } = await axios.get(`${API[type]}`);
  return { data, type };
});

export const getOnePost = createAsyncThunk(
  "posts/getOnePost",
  async (id, { getState }) => {
    const { type } = getState().posts;
    const { data } = await axios.get(`${API[type]}/${id}`);
    return data;
  }
);

export const addPosts = createAsyncThunk(
  "posts/setPosts",
  async ({ type, obj }) => {
    await axios.post(`${API[type]}`, obj);
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (id, { getState, dispatch }) => {
    const { type } = getState().posts;
    await axios.delete(`${API[type]}/${id}`);
    dispatch(getPosts(type));
  }
);

export const editPost = createAsyncThunk(
  "posts/editPost",
  async ({ id, obj }, { getState, dispatch }) => {
    const { type } = getState().posts;
    console.log(id, obj);
    await axios.patch(`${API[type]}/${id}`, obj);
    dispatch(getPosts(type));
  }
);

export const checkUpdate = createAsyncThunk("posts/checkUpdate", async () => {
  const num = 5;
  return num;
});
