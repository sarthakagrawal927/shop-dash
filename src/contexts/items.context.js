import React, { createContext, useState } from "react";

import itemReducer from "../reducers/item.reducer";
import { useLocalStorageReducer } from "../reducers/useLocalStorageReducer";

const defaultItems = [
  { id: 1, category: "cat1", subcategory: "subcat1", name: "item1", price: 2 },
  { id: 2, category: "cat1", subcategory: "subcat1", name: "item2", price: 3 },
  { id: 3, category: "cat1", subcategory: "subcat2", name: "item3", price: 4 },
  { id: 4, category: "cat1", subcategory: "subcat2", name: "item4", price: 5 },
  { id: 5, category: "cat2", subcategory: "subcat3", name: "item5", price: 6 },
  { id: 6, category: "cat2", subcategory: "subcat3", name: "item6", price: 7 },
];

const categories = [
  {
    name: "cat1",
    subcategory: ["subcat1", "subcat2"],
  },
  {
    name: "cat2",
    subcategory: ["subcat3"],
  },
];

export const ItemsContext = createContext();
export const DispatchContext = createContext();
export const CategoryContext = createContext();

export function ItemsProvider(props) {
  const [items, dispatch] = useLocalStorageReducer(
    "items",
    defaultItems,
    itemReducer,
  );

  const [activeCategory, setActiveCategory] = useState({
    name: categories[0].name,
    subcategory: categories[0].subcategory[0],
  });

  return (
    <CategoryContext.Provider
      value={{
        allCategories: categories,
        activeCategory: [activeCategory, setActiveCategory],
      }}>
      <ItemsContext.Provider value={items}>
        <DispatchContext.Provider value={dispatch}>
          {" "}
          {props.children}
        </DispatchContext.Provider>
      </ItemsContext.Provider>
    </CategoryContext.Provider>
  );
}
