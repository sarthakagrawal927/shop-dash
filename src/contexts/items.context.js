import React, { createContext, useState } from "react";

import itemReducer from "../reducers/item.reducer";
import { useLocalStorageReducer } from "../hooks/useLocalStorage";

import { defaultItems } from "./defaultData";

export const ItemsContext = createContext();
export const DispatchContext = createContext();

export function ItemsProvider(props) {
  const [items, dispatch] = useLocalStorageReducer(
    "items",
    defaultItems,
    itemReducer,
  );

  return (
    <ItemsContext.Provider value={items}>
      <DispatchContext.Provider value={dispatch}>
        {" "}
        {props.children}
      </DispatchContext.Provider>
    </ItemsContext.Provider>
  );
}
