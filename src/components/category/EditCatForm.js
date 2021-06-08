import React, { useContext } from "react";

import { DispatchContext, ShopContext } from "../../contexts";
import useInputState from "../../hooks/useInputState";

import TextField from "@material-ui/core/TextField";

function EditCategoryForm({ originalName, toggleEditForm }) {
  const [name, handleChangeName, resetName] = useInputState(originalName);
  const { activeCategory, shop } = useContext(ShopContext);
  const allCategories = shop.categories;
  const [aCategory, setActiveCategory] = activeCategory;
  const dispatch = useContext(DispatchContext);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(activeCategory);
        dispatch({
          type: "EDIT_CATEGORY",
          newName: name,
          id: aCategory.id,
        });
        setActiveCategory({
          id: allCategories[0].id,
          name: allCategories[0].name,
          subcategory: allCategories[0].subcategory[0].name,
          subcategoryId: allCategories[0].subcategory[0].id,
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
