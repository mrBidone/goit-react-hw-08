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
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(apiRegisterThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(apiRegisterThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(apiRegisterThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(apiLoginThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(apiLoginThunk.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.loading = false;
        state.error = null;
      })
      .addCase(apiLoginThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(apiRefreshUserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.isRefreshing = true;
      })
      .addCase(apiRefreshUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.user = action.payload;
        state.isRefreshing = false;
      })
      .addCase(apiRefreshUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.isRefreshing = false;
        state.error = action.payload;
      })
      .addCase(apiLogoutThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(apiLogoutThunk.fulfilled, () => {
        return INITIAL_STATE;
      })
      .addCase(apiLogoutThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      }),
});

export const authReducer = authSlice.reducer;
