import React from "react";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
    root: {
        textAlign: "center",
    },
}); 
const NotFoundPage = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1>404 Page Not Found</h1>
            <p>Sorry, but the page you requested does not exist.</p>
        </div>
    );
}

export default NotFoundPage;