import React, { useContext } from "react";
import useInputState from "./hooks/useInputState";
import TextField from "@material-ui/core/TextField";
import { DispatchContext } from "./contexts/todos.context";

function EditTodoForm({ id, task, toggleEditForm }) {
  const [value, handleChange, reset] = useInputState(task);
  const dispatch = useContext(DispatchContext);

  //   {
  // “Fruit”:{
  // “seasonal”:[{“name”:”Mango”,”price”:100},{“name”:”Pineapple”,”price”:70}],
  // “all-year”:[{“name”:”banana”,”price”:150}],
  // },
  // “Vegetables”:{
  // “Leafy”:[{“name”:”Spinach”,”price”:20},{“name”:”Methi”,”price”:20}],
  // “Essentials”:[{“name”:”Onion”,”price”:35}],
  // }
  // }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "EDIT", newTask: value, id: id });
        reset();
        toggleEditForm();
      }}
      style={{ marginLeft: "1rem", width: "50%" }}>
      <TextField
        margin='normal'
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}
export default EditTodoForm;
