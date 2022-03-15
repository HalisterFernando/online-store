import { PropTypes } from 'prop-types';
import React from 'react';
import Items from '../components/Items';

class ShoppingCart extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <div>
        {items.length === 0 ? (
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        ) : (
          <ul>
            {items.map((item) => (
              <li key={ item.id }>
                <Items
                  productName={ item.title }
                  productImage={ item.thumbnail }
                  productPrice={ item.price }
                  quantity={ item.quantity }
                />
              </li>
            ))}
          </ul>

        )}
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default ShoppingCart;
