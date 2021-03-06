import React, { useContext, memo } from "react";

import { DispatchContext, ShopContext } from "../../contexts";
import useToggleState from "../../hooks/useToggleState";

import EditItemForm from "./EditItemForm";

import {
  ListItem,
  ListItemText,
  IconButton,
  ListItemSecondaryAction,
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

function Item({ id, name, price }) {
  const { activeCategory } = useContext(ShopContext);
  const [aCategory] = activeCategory;
  const [isEditing, toggle] = useToggleState(false);
  const dispatch = useContext(DispatchContext);
  return (
    <ListItem style={{ height: "64px" }} component='div'>
      {isEditing ? (
        <EditItemForm
          id={id}
          originalName={name}
          originalPrice={price}
          toggleEditForm={toggle}
        />
      ) : (
        <>
          <ListItemText>{name}</ListItemText>
          <ListItemText>{price}</ListItemText>

          <ListItemSecondaryAction>
            <IconButton
              aria-label='Delete'
              onClick={() =>
                dispatch({
                  type: "REMOVE_ITEM",
                  itemId: id,
                  categoryId: aCategory.id,
                  subcategoryId: aCategory.subcategoryId,
                })
              }>
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
