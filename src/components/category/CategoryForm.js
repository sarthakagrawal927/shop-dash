import React, { useContext } from "react";

import { DispatchContext } from "../../contexts";
import useInputState from "../../hooks/useInputState";

import { TextField, Paper } from "@material-ui/core";

function CategoryForm() {
  const [category, handleCategoryName, resetCategoryName] = useInputState("");
  const [subcategory, handleSubcategoryName, resetsubcategoryName] =
    useInputState("");

  const dispatch = useContext(DispatchContext);
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({
            type: "ADD_CATEGORY",
            name: category,
            subcategory: [subcategory],
          });
          resetCategoryName();
          resetsubcategoryName();
        }}>
        <TextField
          value={category}
          onChange={handleCategoryName}
          margin='normal'
          label='Add New Category'
          fullWidth
        />
        <TextField
          value={subcategory}
          onChange={handleSubcategoryName}
          margin='normal'
          label='Add Mandatory subcategory for above category'
          fullWidth
        />
        <button style={{ display: "none" }}></button>
      </form>
    </Paper>
  );
}
export default CategoryForm;
