import React, { useContext } from "react";

import { ShopContext, DispatchContext } from "../../contexts";
import useInputState from "../../hooks/useInputState";

import { TextField, Paper } from "@material-ui/core";

function SubcategoryForm() {
  const [subcategory, handleSubcategoryName, resetSubcategoryName] =
    useInputState("");
  const { activeCategory } = useContext(ShopContext);
  const [aCategory] = activeCategory;

  const dispatch = useContext(DispatchContext);

  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({
            type: "ADD_SUBCATEGORY",
            newSubcategory: subcategory,
            id: aCategory.id,
          });
          resetSubcategoryName();
        }}>
        <TextField
          value={subcategory}
          onChange={handleSubcategoryName}
          margin='normal'
          label='Add New Subcategory for selected category'
          fullWidth
        />
        <button style={{ display: "none" }}></button>
      </form>
    </Paper>
  );
}
export default SubcategoryForm;
