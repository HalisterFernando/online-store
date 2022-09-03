import React, { Component } from 'react';
import Box from '@mui/material/Box';
import ShoppingCartButton from './ShoppingCartButton';

export default class Header extends Component {
  render() {
    return (
      <Box
        component="header"
        sx={ { border: '1px solid black', height: '50px', display: 'flex', justifyContent: 'space-between' } }
      >
        <div>
          <img alt="logo" />
        </div>
        <ShoppingCartButton />
      </Box>
    );
  }
}
