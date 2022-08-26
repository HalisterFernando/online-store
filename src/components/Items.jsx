import { PropTypes } from 'prop-types';
import React from 'react';

class Items extends React.Component {
  render() {
    const {
      productName,
      productImage,
      productPrice,
      quantity,
      itemId,
      removeItem,
      decItem,
      incItem } = this.props;

    return (
      <div>
        <p data-testid="shopping-cart-product-name">{productName}</p>
        <div>
          <img src={ productImage } alt={ productName } />
        </div>
        <p>{`R$ ${productPrice.toFixed(2)}`}</p>
        <button
          type="button"
          value={ itemId }
          data-testid="product-decrease-quantity"
          onClick={ decItem }
        >
          -
        </button>
        <span data-testid="shopping-cart-product-quantity">{quantity}</span>
        <button
          value={ itemId }
          type="button"
          data-testid="product-increase-quantity"
          onClick={ incItem }
        >
          +
        </button>
        <button value={ itemId } onClick={ removeItem } type="button">X</button>
      </div>
    );
  }
}

Items.propTypes = {
  productName: PropTypes.string.isRequired,
  productImage: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  itemId: PropTypes.string.isRequired,
  decItem: PropTypes.func.isRequired,
  incItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default Items;
