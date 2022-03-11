import React from 'react';
import Loading from '../component/Loading';
import Menu from '../component/Menu';
import ProductCard from '../components/ProductCard';
import ShoppingCartButton from '../components/ShoppingCartButton';
import { getCategories } from '../services/api';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      load: false,
      categories: [],
      cards: [],
    };
  }

  componentDidMount() {
    this.returnGetCategories();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  returnGetCategories = async () => {
    this.setState(
      { load: true },
      async () => {
        const dbCategories = await getCategories();
        this.setState({
          load: false,
          categories: dbCategories,
        });
      },
    );
  }

  handleClick = async () => {
    const { search, cards } = this.state;
    this.setState({}, async () => {
      const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${search}`);
      const searchQuery = await response.json();
      this.setState({ cards: searchQuery.results });
      console.log(cards);
    });
  }

  render() {
    const { search, categories, load, cards } = this.state;
    return (
      <div>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <input
          data-testid="query-input"
          type="text"
          name="search"
          value={ search }
          onChange={ this.handleChange }
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.handleClick }
        >
          Pesquisar
        </button>
        <ShoppingCartButton />
        { load ? <Loading />
          : <ul><Menu categories={ categories } /></ul> }

        {cards.length > 0 && (cards.map((card) => (
          <ProductCard
            key={ card.id }
            productName={ card.title }
            productImage={ card.thumbnail }
            productPrice={ card.price }
          />
        )))}
      </div>
    );
  }
}

export default Home;
