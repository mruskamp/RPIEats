import React from 'react';
import PropTypes from 'prop-types';

import { AppBar, Toolbar, Typography} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import ShoppingCart from '@material-ui/icons/ShoppingCart';

import mainTheme from '../../theme';

class PrimarySearchAppBar extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <AppBar position="static" className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h2" color="inherit">
            RPI Eats
          </Typography>
          <Link to="/cart" className={classes.linkUnstyled}>
            <ShoppingCart />
          </Link>
        </Toolbar>
      </AppBar>
    );
  }
}

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
  root: {
    width: '100%',
    height: mainTheme.spacing.headerHeight,
    justifyContent: 'center',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
  },
  linkUnstyled: {
    color: '#ffffff',
    marginLeft: '2vw',
  },
});

export default withStyles(styles)(PrimarySearchAppBar);