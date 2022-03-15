import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Details from './pages/Details';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
    };
  }

  addItem = async ({ target }) => {
    const { value } = target;
    const { items } = this.state;
    const response = await fetch(` https://api.mercadolibre.com/items/${value}`);
    const searchId = await response.json();

    // Imple
    const indexItems = items.findIndex((item) => item.id === value);
    console.log(indexItems);
    const numberVerify = -1;
    if (indexItems === numberVerify) {
      searchId.quantity = 1;
      items.push(searchId);
      console.log(items);
    } else {
      items[indexItems].quantity += 1;
      console.log(items);
    }

    this.setState(() => ({
      items,
    }), () => {
      localStorage.setItem('product', JSON.stringify(items));
    });
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/details/:id"
              render={ (props) => <Details { ...props } addItem={ this.addItem } /> }
            />
            <Route exact path="/cart" render={ () => <ShoppingCart items={ items } /> } />
            <Route exact path="/" render={ () => <Home addItem={ this.addItem } /> } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
