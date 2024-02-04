"use client";

import { AppStore, makeStore } from "@/src/07_shared/lib/store/store";
import { useRef } from "react";
import { Provider } from "react-redux";

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const storeRef = useRef<AppStore>();

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};
