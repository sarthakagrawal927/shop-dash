import React, { useContext } from "react";

import { ShopContext, DispatchContext } from "../../contexts";
import useToggleState from "../../hooks/useToggleState";

import EditCategoryForm from "./EditCatForm";

import {
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  Paper,
  IconButton,
  ListItemSecondaryAction,
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

function CategoryDropdown() {
  const [isEditing, toggle] = useToggleState(false);

  const { shop, activeCategory } = useContext(ShopContext);
  const [aCategory, setActiveCategory] = activeCategory;
  const allCategories = shop.categories;

  const handleCategoryChange = (e) => {
    let cat = e.target.value;
    let selectCategory = allCategories.filter(({ name }) => name === cat);

    setActiveCategory({
      name: e.target.value,
      subcategory:
        selectCategory !== undefined
          ? selectCategory[0].subcategory[0].name
          : null,
      id: selectCategory !== undefined ? selectCategory[0].id : null,
      subcategoryId:
        selectCategory !== undefined
          ? selectCategory[0].subcategory[0].id
          : null,
    });
  };

  const dispatch = useContext(DispatchContext);

  return (
    <Paper style={{ margin: "1rem 0", padding: "1rem" }}>
      {isEditing ? (
        <EditCategoryForm
          originalName={aCategory.name}
          toggleEditForm={toggle}
        />
      ) : (
        <FormControl style={{ width: "100%", marginBottom: "1rem" }}>
          <InputLabel id='category-select-label'>Category</InputLabel>
          <Select
            labelId='category-select-label'
            id='category-select'
            value={aCategory.name}
            onChange={handleCategoryChange}>
            {allCategories.map(({ name }, index) => {
              return (
                <MenuItem key={index} value={name}>
                  {name}
                </MenuItem>
              );
            })}
          </Select>
          <ListItemSecondaryAction>
            <IconButton
              aria-label='Delete'
              onClick={() => {
                dispatch({
                  type: "REMOVE_CATEGORY",
                  id: aCategory.id,
                });
                setActiveCategory({
                  ...aCategory,
                  id: allCategories[0].id,
                  name: allCategories[0].name,
                  subcategory: allCategories[0].subcategory[0].name,
                  subcategoryId: allCategories[0].subcategory[0].id,
                });
              }}>
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label='Edit' onClick={toggle}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </FormControl>
      )}
    </Paper>
  );
}

export default CategoryDropdown;
