import React, { useContext } from "react";

import { DispatchContext, ShopContext } from "../../contexts";
import useInputState from "../../hooks/useInputState";

import TextField from "@material-ui/core/TextField";

function EditCategoryForm({ originalName, toggleEditForm }) {
  const [name, handleChangeName, resetName] = useInputState(originalName);
  const { activeCategory } = useContext(ShopContext);
  // const allCategories = shop.categories;
  const [aCategory, setActiveCategory] = activeCategory;
  const dispatch = useContext(DispatchContext);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({
          type: "EDIT_SUBCATEGORY",
          newName: name,
          id: aCategory.id,
          subcategoryId: aCategory.subcategoryId,
        });
        console.log(aCategory);
        setActiveCategory({
          ...aCategory,
          id: aCategory.id,
          name: aCategory.name,
          subcategory: aCategory.subcategory,
          subcategoryId: aCategory.subcategoryId,
        });
        toggleEditForm();
        resetName();
      }}
      style={{ marginLeft: "1rem", width: "80%" }}>
      <TextField
        margin='normal'
        value={name}
        onChange={handleChangeName}
        autoFocus
        style={{ paddingRight: "0.5rem", width: "49%" }}
      />

      <button style={{ display: "none" }}></button>
    </form>
  );
}
export default EditCategoryForm;
