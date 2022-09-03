import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

class ShoppingCartButton extends React.Component {
  render() {
    return (
      <div className="shop-cart">
        <Link to="/cart" data-testid="shopping-cart-button">
          <ShoppingCartOutlinedIcon />
        </Link>
      </div>
    );
  }
}

export default ShoppingCartButton;
