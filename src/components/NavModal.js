import React from "react";
import { Button, Modal, TextField} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const NavModal = ({navName, navColor, variant}) => {
    const useStyles = makeStyles({
        paper: {
            position: 'absolute',
            height: 500,
            width: 400,
            borderRadius: 15,
        },
    });

    function getModalStyle() {
        return {
            backgroundColor: "#FFFFFF",
            margin: "auto",
        };
    }

    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <form style={{textAlign:"center"}}>
                <div style={{marginBottom:25, marginTop: 25}}>
                    <TextField label="Email"/>
                </div>
                <div style={{marginBottom:25}}>
                    <TextField type="password" label="Password"/>
                </div>
                <Button style={{marginBottom:25}} variant="contained" color="primary">{navName}</Button>
            </form>
        </div>
    );
    return (
        <>
            <Button color={navColor} onClick={handleOpen}>{navName}</Button>
            <Modal 
                open={open} 
                onClose={handleClose} 
                style={{display:'flex',alignItems:'center',justifyContent:'center'}}
            >
                {body}
            </Modal>
        </>
    );

}

export default NavModal;