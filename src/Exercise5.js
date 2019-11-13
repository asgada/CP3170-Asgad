import React, { Component } from "react";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


class Exercise5 extends Component {
  state = {
    images: [
      {img:"chicken.png", col:1},
      {img:"crab.png",col:2},
      {img:"dolphin.png",col:1},
      {img:"horse.png", col:2},
      {img:"octopus.png",col:2},
      {img:"rabbit.png",col:1},
      {img:"turtle.png",col:1}
    ]
  };
  render() {
    return (
      <div>
        <div>
          <GridList cellHeight={160}  cols={3}>
            {this.state.images.map(tile => (
              <GridListTile cols={tile.col || 1}>
                <img src={`./images/${tile.img}`} alt={tile.title} style={{width:100,height:100}}/>
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
    );
  }
}
// yarn build
//yarn add netfliy-cli
export default Exercise5;
