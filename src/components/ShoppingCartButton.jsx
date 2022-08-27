import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCartButton extends React.Component {
  render() {
    return (
      <div className="shop-cart">
        <Link to="/cart" data-testid="shopping-cart-button">
          <img
            className="cart-image"
            src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
            alt="imagem-do-carrinho-de-compras"
          />
        </Link>
      </div>
    );
  }
}

export default ShoppingCartButton;
