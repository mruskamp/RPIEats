import React from 'react';
import PropTypes from 'prop-types';

import { AppBar, Toolbar, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import MenuIcon from '@material-ui/icons/Menu';

import mainTheme from '../../theme';

class PrimarySearchAppBar extends React.Component {

  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Grid item xs={4} className={classes.toolbar}>
              <a href="/restaurants" className={classes.linkUnstyled}>
                <RestaurantIcon /> <br /> Restaurants
              </a>
            </Grid>
            <Grid item xs={4} className={classes.toolbar}>
              <a href="/orders" className={classes.linkUnstyled}>
                <MenuIcon /> <br /> Orders
              </a>
            </Grid>
            <Grid item xs={4} className={classes.toolbar}>
              <a href="/profile" className={classes.linkUnstyled}>              
                <AccountCircle /> <br /> Profile
              </a>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
  root: {
    width: '100%',
    height: mainTheme.spacing.footerHeight,
  },
  appBar: {
    height: '100%',
    justifyContent: 'center',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
  },
  linkUnstyled: {
    color: '#ffffff',
    textDecoration: 'none',
  },
});

export default withStyles(styles)(PrimarySearchAppBar);