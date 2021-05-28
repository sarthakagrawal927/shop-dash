import React, { useContext } from "react";

import { ShopContext, DispatchContext } from "../../contexts";
import useToggleState from "../../hooks/useToggleState";

import EditSubcategoryForm from "./EditSubcategoryForm";

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

  const handleSubCategoryChange = (e) => {
    const selectCategory = allCategories.filter(
      ({ id, subcategory }) => id === aCategory.id,
    );

    const selectSubcategory = selectCategory[0].subcategory.filter(
      ({ name }) => name === e.target.value,
    );

    setActiveCategory({
      name: selectCategory[0].name,
      id: selectCategory[0].id,
      subcategory: e.target.value,
      subcategoryId: selectSubcategory[0].id,
    });

    console.log(aCategory);
  };

  const dispatch = useContext(DispatchContext);

  return (
    <Paper style={{ margin: "1rem 0", padding: "1rem" }}>
      {isEditing ? (
        <EditSubcategoryForm
          originalName={aCategory.subcategory}
          toggleEditForm={toggle}
        />
      ) : (
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
          <ListItemSecondaryAction>
            <IconButton
              aria-label='Delete'
              onClick={() => {
                dispatch({
                  type: "REMOVE_SUBCATEGORY",
                  categoryId: aCategory.id,
                  subcategoryId: aCategory.subcategoryId,
                });
                setActiveCategory({
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
