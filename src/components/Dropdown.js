import React, { useContext } from "react";

import {
  CategoriesContext,
  DispatchContext,
} from "../contexts/categories.context";
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

  const { allCategories, activeCategory } = useContext(CategoriesContext);
  const [aCategory, setActiveCategory] = activeCategory;

  console.log(allCategories);

  const handleCategoryChange = (e) => {
    const cat = e.target.value;
    const subs = allCategories.filter(({ name, subcategory }) => name === cat);
    setActiveCategory({
      name: e.target.value,
      subcategory: subs !== undefined ? subs[0].subcategory[0] : null,
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
            return subcategory.map((subcategory, index) => (
              <MenuItem key={index} value={subcategory}>
                {subcategory}
              </MenuItem>
            ));
          })}
        </Select>
      </FormControl>
    </Paper>
  );
}

export default Dropdown;
