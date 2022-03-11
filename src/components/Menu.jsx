import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Menu extends Component {
  buttonMenu = (categorie) => {
    const { id, name } = categorie;
    return (
      <li key={ id }>
        <button
          type="submit"
          data-testid="category"
          value={ id }
        >
          {name}
        </button>
      </li>
    );
  }

  render() {
    const { categories } = this.props;
    return (
      categories
        .map((categorie) => this.buttonMenu(categorie))
    );
  }
}

Menu.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Menu;
