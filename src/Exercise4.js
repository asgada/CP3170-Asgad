import React, { Component } from 'react';
import { Grid } from "@material-ui/core";

class Exercise5 extends Component {
    state = { 
        images:[
            "chicken.png",
            "crab.png",
            "dolphin.png",
            "horse.png",
            "octopus.png",
            "rabbit.png",
            "turtle.png"
        ]
    }
    render() { 
        return (    
            <div>
                <Grid container spacing={2} alignItems="center">
                    {
                        this.state.images.map((item,index) => {
                            if(index  < 4) {
                               return ( <Grid item xs={3}>
                                    <img src={`./images/${item}`} />
                                </Grid>  )
                            } else {
                               return ( <Grid item xs={6}>
                                    <img src={`./images/${item}`} />
                                </Grid> )
                            }
                        }
 
                        )
                    }
                </Grid>
                   {/* <img src={"./images/2222.svg"} alt="hi there"/> */}
            </div>
        );
    }
}
 
export default Exercise5;