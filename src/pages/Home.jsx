import { PropTypes } from 'prop-types';
import React from 'react';
import Button from '@mui/material/Button';
import { Box, TextField } from '@mui/material';
import Loading from '../components/Loading';
import Menu from '../components/Menu';
import ProductCard from '../components/ProductCard';
import { getCategories } from '../services/api';

import Header from '../components/Header';

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
    const { addItem } = this.props;

    return (
      <>
        <Header />
        <Box sx={ { display: 'flex' } }>
          {
            load
              ? <Loading />
              : (
                <Menu
                  categories={ categories }
                  callback={ this.searchCategorie }
                />
              )
          }

          <Box sx={ { width: 1 } }>
            <Box sx={ { display: 'flex', justifyContent: 'center', mt: '30px', gap: '10px' } }>
              <TextField
                size="small"
                name="search"
                label="Pesquise por produto ou categoria"
                value={ search }
                onChange={ this.handleChange }
              />
              <Button
                type="button"
                variant="contained"
                data-testid="query-button"
                onClick={ this.handleClick }
              >
                Pesquisar
              </Button>
            </Box>
            <Box sx={ { height: '800px', overflowY: 'scroll' } }>
              {cards.length > 0 && (cards.map((card) => (
                <ProductCard
                  key={ card.id }
                  productName={ card.title }
                  productImage={ card.thumbnail }
                  productPrice={ card.price }
                  productId={ card.id }
                  addItem={ addItem }
                  productObj={ card } // Objeto correspondente ao ítem renderizado no home usado na função addItem
                />
              )))}
            </Box>
          </Box>

        </Box>
      </>
    );
  }
}

Home.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default Home;
