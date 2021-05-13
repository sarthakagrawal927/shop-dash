import React, { useContext } from "react";

import { ShopContext, DispatchContext } from "../contexts";
import useToggleState from "../hooks/useToggleState";

import EditItemForm from "./EditCatForm";

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

function Dropdown() {
  const [isEditing, toggle] = useToggleState(false);

  const { shop, activeCategory } = useContext(ShopContext);
  const [aCategory, setActiveCategory] = activeCategory;
  const allCategories = shop.categories;

  const handleCategoryChange = (e) => {
    const cat = e.target.value;
    const selectCategory = allCategories.filter(({ name }) => name === cat);

    setActiveCategory({
      name: e.target.value,
      subcategory:
        selectCategory !== undefined
          ? selectCategory[0].subcategory[0].name
          : null,
    });
  };

  const handleSubCategoryChange = (e) => {
    setActiveCategory({ ...aCategory, subcategory: e.target.value });
  };

  const dispatch = useContext(DispatchContext);

  return (
    <Paper style={{ margin: "1rem 0", padding: "1rem" }}>
      {isEditing ? (
        <EditItemForm originalName={aCategory.name} toggleEditForm={toggle} />
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
                  name: aCategory.name,
                });
                setActiveCategory({
                  ...aCategory,
                  name: allCategories[0].name,
                  subcategory: allCategories[0].subcategory[0],
                });
                console.log(aCategory.name);
              }}>
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label='Edit' onClick={toggle}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </FormControl>
      )}

      <FormControl style={{ width: "100%" }}>
        <InputLabel id='subcategory-select-label'>Sub Category</InputLabel>
        <Select
          labelId='subcategory-select-label'
          id='subcategory-select'
          value={aCategory.subcategory}
          onChange={handleSubCategoryChange}>
          {allCategories.map(({ name, subcategory }) => {
            if (name !== aCategory.name) return null;
            return subcategory.map(({ name }, index) => (
              <MenuItem key={index} value={name}>
                {name}
              </MenuItem>
            ));
          })}
        </Select>
      </FormControl>
    </Paper>
  );
}

export default Dropdown;
