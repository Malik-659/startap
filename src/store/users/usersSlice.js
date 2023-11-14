import { createSlice } from "@reduxjs/toolkit";
import {
  activateCode,
  getOneUser,
  loginUser,
  registerUser,
} from "./usersActions";
import { addUserToLocalStorage, updateToken } from "../../helpers/functions";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    loading: false,
    status: "",
    oneUser: null,
  },
  reducers: {
    clearStatusState: (state) => {
      state.status = "";
    },
    clearUserState: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state) => {
        state.loading = false;
        state.status = "error";
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        addUserToLocalStorage(false, action.payload.data);
        updateToken();
        action.payload.navigate("/");
      })
      .addCase(loginUser.rejected, (state) => {
        state.loading = false;
        state.status = "error";
      })
      .addCase(activateCode.pending, (state) => {
        state.loading = true;
      })
      .addCase(activateCode.fulfilled, (state, action) => {
        state.loading = false;
        action.payload.navigate("/sign-in");
      })
      .addCase(activateCode.rejected, (state) => {
        state.loading = false;
        state.status = "error";
      })
      .addCase(getOneUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOneUser.fulfilled, (state, action) => {
        state.loading = false;
        state.oneUser = action.payload;
        addUserToLocalStorage(action.payload, false);
      });
  },
});

export const { clearStatusState, clearUserState } = usersSlice.actions;
export default usersSlice.reducer;
