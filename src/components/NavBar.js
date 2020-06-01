import React from "react";
import { AppBar, Toolbar, Typography, Link, Grid, MenuItem, Menu, IconButton} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import MoreIcon from '@material-ui/icons/MoreVert';
import NavModal from "./NavModal";



const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  }));

export default function NavBar () {
    
  const classes = useStyles();
  const [mobileAnchorEl, setMobileAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'mobile-menu';

  const mainNav = (
    ["Climbing", "Yoga", "Fitness", "Pricing", "About", "Waiver"].map((value) => (
        <Grid key={value} item className={classes.sectionDesktop}>
            <Typography variant="h6">
                <Link href={`/${value}`} underline="none" color="inherit">{value}</Link>
            </Typography>
        </Grid>
    ))
  );

  const mainNavMobile = (
    ["Climbing", "Yoga", "Fitness", "Pricing", "About", "Waiver"].map((value) => (
        <MenuItem key={value}>
            <Typography variant="h6">
                <Link href={`/${value}`} underline="none" color="inherit">{value}</Link>
            </Typography>
        </MenuItem>
    ))
  );
    
  const secondaryNav = (
    ["Login", "Sign Up"].map((value) => (
        <Grid key={value} item className={classes.sectionDesktop}>
            <NavModal navColor="inherit" navName={value}/>
        </Grid>
    ))
  );

  const secondaryNavMobile = (
  ["Login", "Sign Up"].map((value) => (
      <MenuItem key={value}>
          <NavModal navColor="inherit" navName={value}/>
      </MenuItem>
  ))
  );

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {mainNavMobile}
      {secondaryNavMobile}
    </Menu>
  );

    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <Typography variant="h5">    
                                    <Link href="/" underline="none" color="inherit">Lotus Climbing</Link>
                            </Typography>     
                        </Grid>
                        <div className={classes.grow} />
                        {mainNav}
                        {secondaryNav}
                        <div className={classes.sectionMobile}>
                            <IconButton
                              aria-label="show more"
                              aria-controls={mobileMenuId}
                              aria-haspopup="true"
                              onClick={handleMobileMenuOpen}
                              color="inherit"
                            >
                            <MoreIcon />
                            </IconButton>
                        </div>
                        {renderMobileMenu}
                    </Grid>
                </Toolbar>
            </AppBar> 
        </div>
    );
};