import { createSlice } from "@reduxjs/toolkit";
import { getProjects, getOneProject } from "./projectsActions";

const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    loading: false,
    projects: [],
    oneProject: null,
    currentPage: 1,
    totalPages: 1,
  },
  reducers: {
    clearOneProjectState: (state) => {
      state.oneProject = null;
    },
    changePage: (state, action) => {
      state.currentPage = action.payload.page;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProjects.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.projects = action.payload.data;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(getProjects.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getOneProject.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOneProject.fulfilled, (state, action) => {
        state.loading = false;
        state.oneProject = action.payload;
      })
      .addCase(getOneProject.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { clearOneProjectState, changePage } = projectsSlice.actions;
export default projectsSlice.reducer;
