import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import theme from '../../theme';

export default props =>
  <AppBar
    position="static"
    style={{
        height: theme.spacing.headerHeight,
        justifyContent: 'center',
      }}
  >
    <Toolbar
      style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
      <Typography 
        variant="h2" 
        color="inherit"
        >
        RPI Eats
      </Typography>
      <Link to="/cart">
        <Typography>
          Cart
        </Typography>
      </Link>
    </Toolbar>
  </AppBar>