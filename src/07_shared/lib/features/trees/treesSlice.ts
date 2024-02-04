import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { trees } from "../../data";
import { Marker } from "@googlemaps/markerclusterer";
import { ITree } from "../../models";

interface TreesState {
  trees: ITree[];
  selectedTreeKey: string | null;
  treeMarkers: { [key: string]: Marker };
}

const initialState: TreesState = {
  trees: trees,
  selectedTreeKey: null,
  treeMarkers: {},
};

export const treesSlice = createSlice({
  name: "trees",
  initialState,
  reducers: {
    setSelectedTreeKey: (state, action: PayloadAction<string | null>) => {
      state.selectedTreeKey = action.payload;
    },
  },
});

export const { setSelectedTreeKey } = treesSlice.actions;
export default treesSlice.reducer;
