import { PropTypes } from 'prop-types';
import React from 'react';

class Items extends React.Component {
  render() {
    const { productName, productImage, productPrice } = this.props;

    return (
      <div>
        <p data-testid="shopping-cart-product-name">{productName}</p>
        <div>
          <img src={ productImage } alt={ productName } />
        </div>
        <p>{`R$ ${productPrice.toFixed(2)}`}</p>
        <span data-testid="shopping-cart-product-quantity">Quantidade</span>
      </div>
    );
  }
}

Items.propTypes = {
  productName: PropTypes.string.isRequired,
  productImage: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired,
};

export default Items;
