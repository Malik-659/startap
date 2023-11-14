import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./posts/postsSlice";
import usersReducer from "./users/usersSlice";
import projectsReducer from "./projects/projectsSlice";

export default configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    projects: projectsReducer,
  },
});
