import React, { createContext, useState } from "react";

import categoryReducer from "../reducers/category.reducer";

import { categories } from "./defaultData";

export const CategoriesContext = createContext();

export function CategoriesProvider(props) {
  const [activeCategory, setActiveCategory] = useState({
    name: categories[0].name,
    subcategory: categories[0].subcategory[0],
  });

  return (
    <CategoriesContext.Provider
      value={{
        allCategories: categories,
        activeCategory: [activeCategory, setActiveCategory],
      }}>
      {" "}
      {props.children}
    </CategoriesContext.Provider>
  );
}
