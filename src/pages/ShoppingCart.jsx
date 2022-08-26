import { PropTypes } from 'prop-types';
import React from 'react';
import Items from '../components/Items';

class ShoppingCart extends React.Component {
  render() {
    const { items, incItem, decItem, removeItem } = this.props;

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
                  itemId={ item.id }
                  productName={ item.title }
                  productImage={ item.thumbnail }
                  productPrice={ item.price }
                  quantity={ item.quantity }
                  incItem={ incItem }
                  decItem={ decItem }
                  removeItem={ removeItem }
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
  incItem: PropTypes.func.isRequired,
  decItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default ShoppingCart;
