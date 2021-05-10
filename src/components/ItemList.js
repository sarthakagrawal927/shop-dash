import React, { useContext } from "react";

import { ItemsContext, CategoryContext } from "../contexts/items.context";

import Item from "./Item";

import { Paper, List, Divider } from "@material-ui/core";

function Itemlist() {
  const items = useContext(ItemsContext);
  const { category, subcategory } = useContext(CategoryContext);

  if (items.length !== 0)
    return (
      <Paper>
        <List>
          {items.map(
            (item, index) =>
              item.category === category &&
              item.subcategory === subcategory && (
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
