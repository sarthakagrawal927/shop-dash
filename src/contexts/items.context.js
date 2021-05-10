import React, { createContext } from "react";

import itemReducer from "../reducers/item.reducer";
import { useLocalStorageReducer } from "../reducers/useLocalStorageReducer";

const defaultTodos = [
  { id: 1, task: "task1", completed: false },
  { id: 2, task: "task2", completed: true },
];

const defaultItems = [
  { id: 1, category: "cat1", subcategory: "subcat1", name: "item1", price: 2 },
  { id: 2, category: "cat1", subcategory: "subcat1", name: "item2", price: 3 },
  { id: 3, category: "cat1", subcategory: "subcat2", name: "item3", price: 4 },
  { id: 4, category: "cat1", subcategory: "subcat2", name: "item4", price: 5 },
  { id: 5, category: "cat2", subcategory: "subcat3", name: "item5", price: 6 },
  { id: 6, category: "cat2", subcategory: "subcat3", name: "item6", price: 7 },
];

export const ItemsContext = createContext();
export const DispatchContext = createContext();

export function ItemsProvider(props) {
  const [todos, dispatch] = useLocalStorageReducer(
    "items",
    defaultTodos,
    itemReducer,
  );
  return (
    <ItemsContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {" "}
        {props.children}
      </DispatchContext.Provider>
    </ItemsContext.Provider>
  );
}
