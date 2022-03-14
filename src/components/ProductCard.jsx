import { PropTypes } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';

class ProductCard extends React.Component {
  render() {
    const { productName, productImage, productPrice, productId, addItem } = this.props;
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
        <button
          type="button"
          data-testid="product-add-to-cart"
          value={ productId }
          onClick={ addItem }
        >
          Adicionar ao carrinho

        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  productName: PropTypes.string.isRequired,
  productImage: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired,
  productId: PropTypes.string.isRequired,
  addItem: PropTypes.func.isRequired,
};

export default ProductCard;
