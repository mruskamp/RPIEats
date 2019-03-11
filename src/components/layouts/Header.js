import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
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
    </Toolbar>
  </AppBar>