import React, { useContext } from "react";

import { DispatchContext, ShopContext } from "../../contexts";
import useInputState from "../../hooks/useInputState";

import { TextField, Paper } from "@material-ui/core";

function ItemForm() {
  const [name, handleChangeName, resetName] = useInputState("");
  const [price, handleChangePrice, resetPrice] = useInputState("");
  const { activeCategory } = useContext(ShopContext);
  const [aCategory] = activeCategory;

  const dispatch = useContext(DispatchContext);
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(aCategory);
          dispatch({
            type: "ADD_ITEM",
            name: name,
            price: price,
            categoryId: aCategory.id,
            subcategoryId: aCategory.subcategory,
          });
          resetName();
          resetPrice();
        }}>
        <TextField
          value={name}
          onChange={handleChangeName}
          margin='normal'
          label='Add New Item'
          fullWidth
        />
        <TextField
          value={price}
          onChange={handleChangePrice}
          margin='normal'
          label='Add New Item Price'
          fullWidth
        />
        <button style={{ display: "none" }}></button>
      </form>
    </Paper>
  );
}
export default ItemForm;
