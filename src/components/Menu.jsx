import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

class Menu extends Component {
  buttonMenu = (category) => {
    const { callback } = this.props;
    return category.map(({ name, id }) => (
      <li key={ id }>
        <Button
          sx={ { my: 1, width: '300px' } }
          variant="contained"
          type="submit"
          data-testid="category"
          value={ id }
          onClick={ callback }
        >
          {name}
        </Button>
      </li>
    ));
  }

  render() {
    const { categories } = this.props;
    return (
      <Box
        component="nav"
        sx={ { overflowY: 'scroll', height: '100vh', width: '500px', px: 5, py: 2 } }
      >
        <ul>
          {this.buttonMenu(categories)}
        </ul>
      </Box>
    );
  }
}

Menu.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  callback: PropTypes.func.isRequired,
};

export default Menu;
