import React from "react";

import { ItemsProvider } from "../contexts/items.context";

import ItemList from "./ItemList";
import ItemForm from "./ItemForm";

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
          <ItemsProvider>
            <ItemForm />
            <ItemList />
          </ItemsProvider>
        </Grid>
      </Grid>
    </Paper>
  );
}
export default ItemApp;
