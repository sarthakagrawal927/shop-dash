import React, { useContext } from "react";

import { ShopContext } from "../contexts";

import Item from "./Item";

import { Paper, List, Divider } from "@material-ui/core";

function Itemlist() {
  const { activeCategory, shop } = useContext(ShopContext);
  const allCategories = shop.categories;
  console.log(allCategories);
  const [aCategory] = activeCategory;
  let items = null;
  // eslint-disable-next-line
  allCategories.map((category) => {
    // eslint-disable-next-line
    category.subcategory.map((subcategory) => {
      if (
        aCategory.name === category.name &&
        aCategory.subcategory === subcategory.name
      ) {
        items = subcategory.items;
      }
    });
  });

  if (items.length !== 0)
    return (
      <Paper>
        <List>
          {items.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <Item {...item} key={index} />
                {index < items.length - 1 && <Divider />}
              </React.Fragment>
            );
          })}
        </List>
      </Paper>
    );
  return null;
}
export default Itemlist;
