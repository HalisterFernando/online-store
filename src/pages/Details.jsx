import { PropTypes } from 'prop-types';
import React from 'react';
import ShoppingCartButton from '../components/ShoppingCartButton';

class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      details: { },
    };
  }

  componentDidMount() {
    this.productDetail();
  }

  productDetail = async () => {
    const { match: { params: { id } } } = this.props;
    this.setState({}, async () => {
      const response = await fetch(` https://api.mercadolibre.com/items/${id}`);
      const searchId = await response.json();
      this.setState({ details: searchId });
      console.log(id);
    });
  }

  render() {
    const { details } = this.state;
    return (
      <>
        <ShoppingCartButton />
        <h4 data-testid="product-detail-name">{details.title}</h4>
        <img src={ details.thumbnail } alt={ details.title } />
        <p>{ details.price }</p>
      </>
    );
  }
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Details;
