import React from 'react';
import ShoppingCartButton from '../components/ShoppingCartButton';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { search } = this.state;
    return (
      <div>
        <input
          type="text"
          name="search"
          value={ search }
          onChange={ this.handleChange }
        />
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <ShoppingCartButton />
      </div>
    );
  }
}

export default Home;
