import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { navType } from "../types/typings";

const initialState: navType = {
  origin: null,
  destination: null,
  travelTimeInfo: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInfo: (state, action) => {
      state.travelTimeInfo = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOrigin, setDestination, setTravelTimeInfo } =
  navSlice.actions;

// Selectors
export const selectOrigin = (state: RootState) => {
  return state.nav.origin;
};

export const selectDestination = (state: RootState) => {
  return state.nav.destination;
};

export const selectTravelTimeInfo = (state: RootState) => {
  return state.nav.travelTimeInfo;
};

export default navSlice.reducer;
