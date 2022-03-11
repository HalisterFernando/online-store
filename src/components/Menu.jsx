import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Menu extends Component {
  buttonMenu = (categorie) => {
    const { id, name } = categorie;
    const { callback } = this.props;
    return (
      <li key={ id }>
        <button
          type="submit"
          data-testid="category"
          value={ id }
          onClick={ callback }
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
  callback: PropTypes.func.isRequired,
};

export default Menu;
