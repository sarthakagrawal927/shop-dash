import React, { useContext } from "react";

import {
  CategoriesContext,
  DispatchContext,
} from "../contexts/categories.context";
import useInputState from "../hooks/useInputState";

import { TextField, Paper } from "@material-ui/core";

function CategoryForm() {
  const [subcategory, handleSubcategoryName, resetSubcategoryName] =
    useInputState("");
  const { activeCategory } = useContext(CategoriesContext);
  const [aCategory] = activeCategory;

  const dispatch = useContext(DispatchContext);
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({
            type: "ADD_SUBCATEGORY",
            subcategory: subcategory,
            category: aCategory,
          });
          resetSubcategoryName();
        }}>
        <TextField
          value={subcategory}
          onChange={handleSubcategoryName}
          margin='normal'
          label='Add New Subcategory for selected CATEGORY'
          fullWidth
        />
        <button style={{ display: "none" }}></button>
      </form>
    </Paper>
  );
}
export default CategoryForm;
