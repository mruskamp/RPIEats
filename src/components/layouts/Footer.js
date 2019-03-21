import React from 'react';
import PropTypes from 'prop-types';

import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import MenuIcon from '@material-ui/icons/Menu';

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
            <div>
              <IconButton color="inherit">
                <a href="/restaurants" className={classes.linkUnstyled}>
                  <RestaurantIcon />
                </a>
              </IconButton>
              <IconButton color="inherit">
                <a href="/orders" className={classes.linkUnstyled}>
                  <MenuIcon />
				        </a>
              </IconButton>
              <IconButton>
                <a href="/profile" className={classes.linkUnstyled}>              
                  <AccountCircle />
                </a>
              </IconButton>
            </div>
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
    height: theme.spacing.footerHeight,
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
  },
});

export default withStyles(styles)(PrimarySearchAppBar);