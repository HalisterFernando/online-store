import { PropTypes } from 'prop-types';
import React from 'react';
import '../css/Home.css';

class ProductCard extends React.Component {
  render() {
    const { productName, productImage, productPrice } = this.props;
    return (
      <div className="box-card">
        <p data-testid="product">{productName}</p>
        <div>
          <img src={ productImage } alt={ productName } />
        </div>
        <p>{`R$: ${productPrice}`}</p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  productName: PropTypes.string.isRequired,
  productImage: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired,
};

export default ProductCard;
