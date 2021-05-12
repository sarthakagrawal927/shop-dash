import React, { useContext } from "react";

import { ShopContext } from "../contexts";

import Item from "./Item";

import { Paper, List, Divider } from "@material-ui/core";

function Itemlist() {
  const items = useContext(ShopContext);
  const { activeCategory } = useContext(ShopContext);
  const [aCategory] = activeCategory;

  if (items.length !== 0)
    return (
      <Paper>
        <List>
          {items.map(
            (item, index) =>
              item.category === aCategory.name &&
              item.subcategory === aCategory.subcategory && (
                <React.Fragment key={index}>
                  <Item {...item} key={index} />
                  {index < items.length - 1 && <Divider />}
                </React.Fragment>
              ),
          )}
        </List>
      </Paper>
    );
  return null;
}
export default Itemlist;
