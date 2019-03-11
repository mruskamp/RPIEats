import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, IconButton, MenuItem, Menu } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import MenuIcon from '@material-ui/icons/Menu';

import theme from '../../theme';

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
    const { anchorEl} = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <div>
              <IconButton color="inherit">
                  <RestaurantIcon />
              </IconButton>
              <IconButton color="inherit">
                  <MenuIcon />
              </IconButton>
              <IconButton
                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              {renderMenu}
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
});

export default withStyles(styles)(PrimarySearchAppBar);