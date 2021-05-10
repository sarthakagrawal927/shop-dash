import React, { useContext, memo } from "react";

import { DispatchContext } from "../contexts/items.context";

import useToggleState from "../hooks/useToggleState";

import EditItemForm from "./EditItemForm";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

function Item({ id, task, completed }) {
  const [isEditing, toggle] = useToggleState(false);
  const dispatch = useContext(DispatchContext);
  return (
    <ListItem style={{ height: "64px" }}>
      {isEditing ? (
        <EditItemForm id={id} task={task} toggleEditForm={toggle} />
      ) : (
        <>
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}>
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton
              aria-label='Delete'
              onClick={() => dispatch({ type: "REMOVE", id: id })}>
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label='Edit' onClick={toggle}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}

export default memo(Item);
