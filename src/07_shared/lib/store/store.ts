import { useStore, useSelector, useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import treesReducer from "../features/trees/treesSlice";

import { TypedUseSelectorHook } from "react-redux";

export const makeStore = () => {
  return configureStore({
    reducer: {
      trees: treesReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => AppStore = useStore;
