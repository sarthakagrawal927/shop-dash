import React, { useContext } from "react";

import { CategoryContext } from "../contexts/items.context";

import {
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  Paper,
} from "@material-ui/core";

function Dropdown() {
  const { allCategories, activeCategory } = useContext(CategoryContext);
  const [aCategory, setActiveCategory] = activeCategory;

  const handleCategoryChange = (e) => {
    const cat = e.target.value;
    const subs = allCategories.filter(({ name, subcategory }) => name === cat);
    setActiveCategory({
      name: e.target.value,
      subcategory: subs[0].subcategory[0],
    });
  };
  const handleSubCategoryChange = (e) => {
    setActiveCategory({ ...aCategory, subcategory: e.target.value });
  };

  return (
    <Paper style={{ margin: "1rem 0", padding: "1rem" }}>
      <FormControl style={{ width: "100%" }}>
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
      </FormControl>

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
          <MenuItem value='' key='q2313'></MenuItem>
        </Select>
      </FormControl>
    </Paper>
  );
}

export default Dropdown;
