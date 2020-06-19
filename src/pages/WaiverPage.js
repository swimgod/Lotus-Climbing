import React from "react";
import { Button, Grid} from "@material-ui/core";
import logo from "../static/lotus-flower.svg"
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    logo: {
        width: "60px",
        height: "60px",
        paddingTop: "30px",
    },
    button: {
        width: "300px",
    }
}));

const WaiverPage = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container spacing={3} direction="column" alignContent="center" alignItems="center"> 
                <Grid item>
                    <img src={logo} alt="Lotus Logo" className={classes.logo}/>
                </Grid>
                <Grid item>
                    <Button variant="contained" href="/signup" className={classes.button} color="primary">New to Lotus Climbing?</Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" className={classes.button} color="primary">Already have an account.</Button> 
                </Grid>
            </Grid>
        </div>
    );
}

export default WaiverPage;