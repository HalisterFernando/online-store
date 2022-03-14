import React from 'react';

class ShoppingCart extends React.Component {
  render() {
    return (
      <div className="box-cart">
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    );
  }
}

export default ShoppingCart;
