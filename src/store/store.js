import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/usersSlice";
import projectsReducer from "./projects/projectsSlice";

export default configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    users: usersReducer,
    projects: projectsReducer,
  },
});
