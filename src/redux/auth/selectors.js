export const selectAuthUser = (state) => state.auth.user;
export const selectLoadingAuthUser = (state) => state.auth.loading;
export const selectAuthToken = (state) => state.auth.token;
export const selectAuthIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectAuthisRefreshing = (state) => state.auth.isRefreshing;
export const selectAuthError = (state) => state.auth.error;
