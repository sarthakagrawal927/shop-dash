import React from "react";

import { ShopProvider } from "../contexts";

import ItemList from "./item/ItemList";
import ItemForm from "./item/ItemForm";
import CategoryDropdown from "./category/CategoryDropdown";
import CategoryForm from "./category/CategoryForm";
import SubcategoryForm from "./subcategory/SubcategoryForm";
import SubcategoryDropdown from "./subcategory/SubcategoryDropdown";

import { Typography, Paper, AppBar, Toolbar, Grid } from "@material-ui/core";

function ItemApp() {
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}>
      <AppBar color='primary' position='static' style={{ height: "64px" }}>
        <Toolbar>
          <Typography color='inherit'>Items </Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify='center' style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={8}>
          <ShopProvider>
            <CategoryForm />
            <SubcategoryForm />
            <CategoryDropdown />
            <SubcategoryDropdown />
            <ItemForm />
            <ItemList />
          </ShopProvider>
        </Grid>
      </Grid>
    </Paper>
  );
}
export default ItemApp;
