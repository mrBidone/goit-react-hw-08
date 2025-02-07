import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  name: "",
  number: "",
  showTrash: false,
  statusFilter: "",
};

export const filtersSlice = createSlice({
  name: "filter",
  initialState: INITIAL_STATE,
  reducers: {
    setFilterValue(state, action) {
      (state.name = action.payload), (state.number = action.payload);
    },
    setStatusFilter(state, action) {
      state.statusFilter = action.payload;
    },
    toggleShowTrash(state) {
      state.showTrash = !state.showTrash;
    },
  },
});

export const filterReducer = filtersSlice.reducer;
export const { setFilterValue, setStatusFilter } = filtersSlice.actions;
