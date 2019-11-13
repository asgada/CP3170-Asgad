import React from "react";
import "./App.css";
import { Button, Grid, Paper } from "@material-ui/core";

class Exercise1 extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <Grid container direction="column">
          <Button size="large" variant="outlined" style={{width:"50vmin"}} >
            Default
          </Button>
          <Button size="large" variant="outlined" color="primary">
            Primary
          </Button>
          <Button size="large" variant="outlined" color="secondary">
            Secondary
          </Button>
          <Button size="large" variant="outlined" disabled>
            Disabled
          </Button>
          <Button size="large" variant="outlined" href="#outlined-buttons">
            Link
          </Button>
          <Button size="large" variant="outlined" color="inherit">
            Inherit
          </Button>
        </Grid>
        {/* <Paper elevation={5} style={{backgroundColor:"yellow", width:"10vmin", fontFamily:"Courier New" }}>
          This is a paper
        </Paper> */}
      </div>
    );
  }
}

export default Exercise1;
