import React, { createContext, useState } from "react";

import reducer from "../reducers";
import { useLocalStorageReducer } from "../hooks/useLocalStorage";

import { shop } from "./defaultData";

export const ShopContext = createContext();
export const DispatchContext = createContext();

export function ShopProvider(props) {
  const [activeCategory, setActiveCategory] = useState({
    name: shop[0].category,
    subcategory: shop[0].subcategory[0].name,
    id: shop[0].id,
  });
  const [wholeShop, dispatch] = useLocalStorageReducer("shop", shop, reducer);

  return (
    <ShopContext.Provider
      value={{
        allCategories: wholeShop,
        activeCategory: [activeCategory, setActiveCategory],
      }}>
      {" "}
      <DispatchContext.Provider value={dispatch}>
        {" "}
        {props.children}
      </DispatchContext.Provider>
    </ShopContext.Provider>
  );
}
