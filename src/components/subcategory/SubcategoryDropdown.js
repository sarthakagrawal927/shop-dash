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
  const { shop, activeCategory } = useContext(ShopContext);
  const [aCategory, setActiveCategory] = activeCategory;
  const allCategories = shop.categories;

  const [isEditing, toggle] = useToggleState(false);

  const handleSubcategoryChange = (e) => {
    let subcat = e.target.value;
    let selectCategory = allCategories.filter(
      ({ id, subcategory }) => id === aCategory.id,
    );

    let selectSubcategory = selectCategory[0].subcategory.filter(
      ({ name }) => name === subcat,
    );

    console.log(selectSubcategory);

    setActiveCategory({
      name: selectCategory !== undefined ? selectCategory[0].name : null,
      id: selectCategory !== undefined ? selectCategory[0].id : null,
      subcategory:
        selectSubcategory !== undefined ? selectSubcategory[0].name : null,
      subcategoryId:
        selectSubcategory !== undefined ? selectSubcategory[0].id : null,
    });
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
            onChange={handleSubcategoryChange}>
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
