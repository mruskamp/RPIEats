import React from 'react';
import PropTypes from 'prop-types';

import { AppBar, Toolbar, Typography, Grid} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import ShoppingCart from '@material-ui/icons/ShoppingCart';

import mainTheme from '../../theme';

// Component for the Header of the Application
class PrimarySearchAppBar extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <AppBar position="static" className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <Grid item xs={8} className={classes.toolbar}>
            <Typography color="inherit" className={classes.title}>
              RPI Eats
            </Typography>
          </Grid>
          {this.props.userType === "customer" &&
            <Link to="/cart" className={classes.linkUnstyled}>
              <ShoppingCart />
            </Link>
          }
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
  title: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '3rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '4rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '5rem',
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
  },
  linkUnstyled: {
    color: '#ffffff',
    marginLeft: '2vw',
    textDecoration: 'none',
  },
});

export default withStyles(styles)(PrimarySearchAppBar);