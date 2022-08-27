import { PropTypes } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { productName, productImage, productPrice,
      productId, addItem, productObj } = this.props;
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
          onClick={ () => addItem(productObj) } // Objeto passado via props usado como parâmetro da função addItem

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
  productObj: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ProductCard;
