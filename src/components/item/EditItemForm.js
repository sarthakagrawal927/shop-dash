import React, { useContext } from "react";

import { DispatchContext, ShopContext } from "../../contexts";
import useInputState from "../../hooks/useInputState";

import TextField from "@material-ui/core/TextField";

function EditItemForm({ id, originalName, originalPrice, toggleEditForm }) {
  const [name, handleChangeName, resetName] = useInputState(originalName);
  const [price, handleChangePrice, resetPrice] = useInputState(originalPrice);

  const dispatch = useContext(DispatchContext);
  const { activeCategory } = useContext(ShopContext);
  const [aCategory] = activeCategory;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({
          type: "EDIT_ITEM",
          newName: name,
          newPrice: price,
          itemId: id,
          categoryId: aCategory.id,
          subcategoryId: aCategory.subcategoryId,
        });
        resetName();
        resetPrice();
        toggleEditForm();
      }}
      style={{ marginLeft: "1rem", width: "80%" }}>
      <TextField
        margin='normal'
        value={name}
        onChange={handleChangeName}
        autoFocus
        style={{ paddingRight: "0.5rem", width: "49%" }}
      />
      <TextField
        margin='normal'
        value={price}
        onChange={handleChangePrice}
        autoFocus
        style={{ width: "49%" }}
      />
      <button style={{ display: "none" }}></button>
    </form>
  );
}
export default EditItemForm;
