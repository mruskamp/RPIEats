import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default props =>
  <AppBar position="static">
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