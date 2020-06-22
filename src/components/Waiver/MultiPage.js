import React, {Component} from 'react';
import {Grid, Button} from "@material-ui/core";
import logo from "../../static/lotus-flower.svg";
import CanvasDraw from 'react-canvas-draw';
import waiverText from "../../static/waiver-text";
import {signText} from "../../static/waiver-text";

const text = (Object.keys(waiverText).map( (value, key) => {
    return (
        <p value={value} key={key}>{`${waiverText[value]}`}</p>
    )
}));

class MultiPage extends Component {
    render() {
        return(
            <Grid container spacing={2} direction="column" alignItems="center" justify="center">
                    <Grid item>
                        <img src={logo} alt="Lotus Logo" style={{width: "60px", height: "60px", paddingTop:"30px"}}/>
                    </Grid>
                    <Grid item style={{textAlign: "center"}} xs={12}>
                        <h2>Lotus Climbing Gyms</h2>
                        <h3>Visitor Agreement</h3>
                        <h3>(Including assumption of risks and agreements of release and indemnity)</h3>
                        <h3>PLEASE READ CAREFULLY BEFORE SIGNING</h3>
                        <h3>THIS DOCUMENT MUST BE SIGNED BY AN ADULT OF AT LEAST 18 YEARS OF AGE</h3>
                    </Grid>
                    <Grid item style={{textAlign: "justify"}} xs={12}>
                        {text}
                        <p>{signText["s1"]}</p>
                        <h3 style={{textAlign: "center"}}>{signText["s2"]}</h3>
                        <p style={{textAlign: "center"}}>{signText["s3"]}</p>
                    </Grid>
                    <Grid item style={{alignContent: "center"}}>
                        <Button onClick={() => this.saveableCanvas.clear()}>Clear</Button>
                        <CanvasDraw  
                            ref={canvasDraw => (this.saveableCanvas = canvasDraw)} 
                            canvasWidth="500px" 
                            canvasHeight="200px" 
                            brushRadius={1}
                            lazyRadius={1} 
                            style={{border: "3px solid red"}}
                        />
                    </Grid>
            </Grid>
        );
    }
}
export default MultiPage;