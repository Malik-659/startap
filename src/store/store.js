import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./posts/postsSlice";

export default configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    posts: postsReducer,
  },
});
