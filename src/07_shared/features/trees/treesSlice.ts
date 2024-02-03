import { createSlice } from "@reduxjs/toolkit";
import { trees } from "../../data";

const initialState = {
  trees: trees,
};

export const treesSlice = createSlice({
  name: "tree points",
  initialState,
  reducers: {
    increment: (state) => {
        
    }
  },
});

export const {} = treesSlice.actions;
export default treesSlice.reducer;
