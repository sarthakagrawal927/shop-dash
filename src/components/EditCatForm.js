import React, { useContext } from "react";

import { DispatchContext } from "../contexts";
import useInputState from "../hooks/useInputState";

import TextField from "@material-ui/core/TextField";

function EditCategoryForm({ originalName, toggleEditForm }) {
  const [name, handleChangeName, resetName] = useInputState(originalName);

  const dispatch = useContext(DispatchContext);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({
          type: "EDIT_CATEGORY",
          newName: name,
        });
        console.log(name);
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
