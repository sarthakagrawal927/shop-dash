import React, { createContext, useState } from "react";

import categoryReducer from "../reducers/category.reducer";
import { useLocalStorageReducer } from "../hooks/useLocalStorage";

import { categories } from "./defaultData";

export const CategoriesContext = createContext();
export const DispatchContext = createContext();

export function CategoriesProvider(props) {
  const [activeCategory, setActiveCategory] = useState({
    name: categories[0].name,
    subcategory: categories[0].subcategory[0],
  });

  const [allCategories, dispatch] = useLocalStorageReducer(
    "categories",
    categories,
    categoryReducer,
  );

  return (
    <CategoriesContext.Provider
      value={{
        allCategories: allCategories,
        activeCategory: [activeCategory, setActiveCategory],
      }}>
      {" "}
      <DispatchContext.Provider value={dispatch}>
        {" "}
        {props.children}
      </DispatchContext.Provider>
    </CategoriesContext.Provider>
  );
}
