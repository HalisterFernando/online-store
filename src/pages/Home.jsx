import React from 'react';
import Loading from '../components/Loading';
import Menu from '../components/Menu';
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

  searchCategorie = async ({ target }) => {
    const { value } = target;
    const url = `https://api.mercadolibre.com/sites/MLB/search?category=${value}`;
    const response = await fetch(url);
    const json = await response.json();
    const categorieArray = json.results;
    this.setState({ cards: categorieArray });
  }

  render() {
    const { search, categories, load, cards } = this.state;
    return (
      <div>
        <div className="box-search">
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
        </div>
        <ShoppingCartButton />
        { load ? <Loading />
          : (
            <ul>
              <Menu
                categories={ categories }
                callback={ this.searchCategorie }
              />
            </ul>
          )}

        {cards.length > 0 && (cards.map((card) => (
          <ProductCard
            key={ card.id }
            productName={ card.title }
            productImage={ card.thumbnail }
            productPrice={ card.price }
            productId={ card.id }
          />
        )))}
      </div>
    );
  }
}

export default Home;
