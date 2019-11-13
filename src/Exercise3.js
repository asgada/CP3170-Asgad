import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AppleIcon from "@material-ui/icons/Apple";
import MemoryIcon from "@material-ui/icons/Memory";
import AddIcon from "@material-ui/icons/Add";
import { Grid } from "@material-ui/core";

class Exercise3 extends Component {
  state = {};
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography style={{ flex: 1 }} variant="h6">
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <AppleIcon fontSize="large" color="secondary" />
        <MemoryIcon fontSize="large" color="disabled" />
        <AddIcon fontSize="large" />

        <Grid container spacing={8}>
          <Grid item xs={3} style={{backgroundColor:"darkred", color:"white"}}>
            <h1>ABC</h1>
          </Grid>
          <Grid item xs={3} style={{backgroundColor:"#019083", color:"white"}}>
            <h1>ABC</h1>
          </Grid>
          <Grid item xs={3} style={{backgroundColor:"orange", color:"white"}}>
            <h1>ABC</h1>
          </Grid>
          <Grid item xs={3} style={{backgroundColor:"crimson", color:"white"}}>
            <h1>ABC</h1>
          </Grid>
        </Grid>
     
      </div>
    );
  }
}

export default Exercise3;
