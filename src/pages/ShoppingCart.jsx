import React from 'react';
import Items from '../components/Items';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      // loading: true,
      cartItems: [],

    };
  }

  componentDidMount() {
    this.getItems();
  }

  getItems = () => {
    if (!JSON.parse(localStorage.getItem('product'))) {
      localStorage.setItem('product', JSON.stringify([]));
    }
    const items = localStorage.getItem('product');
    this.setState({ cartItems: JSON.parse(items) });
  }

  render() {
    const { cartItems } = this.state;
    return (
      <div>
        {cartItems.length === 0 ? (
          <p data-testidid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={ item.id }>
                <Items
                  productName={ item.title }
                  productImage={ item.thumbnail }
                  productPrice={ item.price }
                />
              </li>
            ))}
          </ul>

        )}
      </div>
    );
  }
}

export default ShoppingCart;
