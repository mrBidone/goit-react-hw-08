import { createSlice } from "@reduxjs/toolkit";
import {
  apiLoginThunk,
  apiLogoutThunk,
  apiRefreshUserThunk,
  apiRegisterThunk,
} from "./operations";

const INITIAL_STATE = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(apiRegisterThunk.pending, (state) => {
        state.error = null;
      })
      .addCase(apiRegisterThunk.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(apiRegisterThunk.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(apiLoginThunk.pending, (state) => {
        state.error = null;
      })
      .addCase(apiLoginThunk.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(apiLoginThunk.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(apiRefreshUserThunk.pending, (state) => {
        state.error = null;
        state.isRefreshing = true;
      })
      .addCase(apiRefreshUserThunk.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload;
        state.isRefreshing = false;
      })
      .addCase(apiRefreshUserThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.isRefreshing = false;
      })
      .addCase(apiLogoutThunk.pending, (state) => {
        state.error = null;
      })
      .addCase(apiLogoutThunk.fulfilled, () => {
        return INITIAL_STATE;
      })
      .addCase(apiLogoutThunk.rejected, (state, action) => {
        state.error = action.payload;
      }),
});

export const authReducer = authSlice.reducer;
