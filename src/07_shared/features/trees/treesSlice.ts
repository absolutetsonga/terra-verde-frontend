import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { trees } from "../../data";
import { Marker } from "@googlemaps/markerclusterer";

type Tree = {
  key: string;
  name: string;
  lat: number;
  lng: number;
};

interface TreesState {
  trees: Tree[];
  selectedTreeKey: string | null;
  treeMarkers: { [key: string]: Marker };
}

const initialState: TreesState = {
  trees: trees,
  selectedTreeKey: null,
  treeMarkers: {},
};

export const treesSlice = createSlice({
  name: "tree points",
  initialState,
  reducers: {
    setSelectedTreeKey: (state, action: PayloadAction<string | null>) => {
      state.selectedTreeKey = action.payload;
    },

    addTreeMarker: (state, action: PayloadAction<Marker>) => {
      console.log(action);
      console.log(state);
    },

    deleteTreeMarker: (state, action: PayloadAction<string>) => {
      delete state.treeMarkers[action.payload];
    },
  },
});

export const { setSelectedTreeKey, addTreeMarker, deleteTreeMarker } =
  treesSlice.actions;
export default treesSlice.reducer;
