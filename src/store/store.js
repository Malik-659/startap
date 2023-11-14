import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./posts/postsSlice";
import usersReducer from "./users/usersSlice";

export default configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
});
