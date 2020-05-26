import React from "react";
import { AppBar, Toolbar, Typography, Link, Grid} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import NavModal from "./NavModal";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: 2,
    },
});

export default function NavBar () {
    const classes = useStyles();
   
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Grid container spacing={3}>
                        <Grid item xs={3} sm={3} md={7}>
                            <Typography variant="h5" className={classes.title}>    
                                    <Link href="/" underline="none" color="inherit">Lotus Climbing</Link>
                            </Typography>     
                        </Grid>
                        {["Climbing", "Yoga", "Fitness", "Pricing", "About", "Waiver"].map((value) => (
                            <Grid key={value} item>
                                <Typography variant="h6">
                                    <Link href="/" underline="none" color="inherit">{value}</Link>
                                </Typography>
                            </Grid>
                        ))}
                        {["Login", "Sign Up"].map((value) => (
                            <Grid key={value} item>
                                <NavModal navColor="inherit" navName={value}/>
                            </Grid>
                        ))}
                    </Grid>
                </Toolbar>
            </AppBar> 
        </div>
        
    );
};