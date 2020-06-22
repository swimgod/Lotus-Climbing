import React from "react"
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import MultiStepForm from "./MultiStepForm"

const useStyles = makeStyles((theme) => ({
    layout: {
        width: "auto",
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: "auto",
            marginRight: "auto"
        }
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(8),
            marginBottom: theme.spacing(8),
            padding: theme.spacing(3)
        }
    }
}))

const SignUp =  () => {
  const classes = useStyles();
  return (
    <div className="WaiverFormPage">
      <CssBaseline />
      <main className={classes.layout}>
        <Typography variant="h4" align="center" style={{ marginTop: 80 }}>
          Your Information
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          style={{ marginTop: 10}}
        >
          Fill in Adult Visitor and/or Parent or Legal Guardian Information
        </Typography>
        <Paper className={classes.paper}>
          <MultiStepForm />
        </Paper>
      </main>
    </div>
  )
}

export default SignUp;
