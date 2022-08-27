import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Menu extends Component {
  buttonMenu = (category) => {
    const { id, name } = category;
    const { callback } = this.props;
    return (
      <li key={ id }>
        <button
          className="bt-category"
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
        .map((category) => this.buttonMenu(category))
    );
  }
}

Menu.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  callback: PropTypes.func.isRequired,
};

export default Menu;
