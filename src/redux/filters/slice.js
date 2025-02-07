import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  name: "",
  number: "",
  statusFilter: "",
};

export const filtersSlice = createSlice({
  name: "filter",
  initialState: INITIAL_STATE,
  reducers: {
    setFilterValue(state, action) {
      (state.name = action.payload), (state.number = action.payload);
    },
  },
});

export const filterReducer = filtersSlice.reducer;
export const { setFilterValue } = filtersSlice.actions;
