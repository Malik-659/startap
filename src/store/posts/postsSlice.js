import { createSlice } from "@reduxjs/toolkit";
import { checkUpdate, getOnePost, getPosts } from "./postsAction";
import { check } from "prettier";
import { act } from "react-dom/test-utils";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    onePost: null,
    type: null,
    loading: false,
    status: "",
    checkUp: null,
  },
  reducers: {},
  extraReducers: (buider) => {
    buider
      .addCase(getPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload.data;
        state.type = action.payload.type;
      })
      .addCase(getPosts.rejected, (state) => {
        state.loading = false;
        state.status = "error";
      })
      .addCase(getOnePost.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOnePost.fulfilled, (state, action) => {
        state.loading = false;
        state.onePost = action.payload;
      })
      .addCase(getOnePost.rejected, (state) => {
        state.loading = false;
        state.status = "error";
      })
      .addCase(checkUpdate.fulfilled, (state, action) => {
        state.checkUp = action.payload;
      });
  },
});

export default postsSlice.reducer;
