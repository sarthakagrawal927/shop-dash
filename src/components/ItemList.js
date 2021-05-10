import React, { useContext } from "react";

import { ItemsContext } from "../contexts/items.context";

import Item from "./Item";

import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

function Itemlist() {
  const items = useContext(ItemsContext);

  if (items.length !== 0)
    return (
      <Paper>
        <List>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <Item {...item} key={index} />
              {index < items.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    );
  return null;
}
export default Itemlist;
