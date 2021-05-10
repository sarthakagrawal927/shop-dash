import React, { useContext } from "react";

import { DispatchContext } from "../contexts/items.context";

import useInputState from "../hooks/useInputState";

import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";

function ItemForm() {
  const [name, handleChangeName, resetName] = useInputState("");
  const [price, handleChangePrice, resetPrice] = useInputState("");

  const dispatch = useContext(DispatchContext);
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "ADD", name: name, price: price });
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