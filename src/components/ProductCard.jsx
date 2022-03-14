import { PropTypes } from 'prop-types';
import React from 'react';
import '../css/Home.css';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { productName, productImage, productPrice, productId } = this.props;
    return (
      <div className="box-card">
        <Link
          to={ `/details/${productId}` }
          data-testid="product-detail-link"
        >
          <p data-testid="product">{productName}</p>
          <div>
            <img src={ productImage } alt={ productName } />
          </div>
          <p>{`R$: ${productPrice}`}</p>
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = {
  productName: PropTypes.string.isRequired,
  productImage: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired,
  productId: PropTypes.string.isRequired,
};

export default ProductCard;
