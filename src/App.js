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

  addItem = async (e) => {
    const { value } = e.target;
    const response = await fetch(` https://api.mercadolibre.com/items/${value}`);
    const searchId = await response.json();

    this.setState((prevState) => ({
      items: [...prevState.items, searchId],
    }), () => {
      const { items } = this.state;
      localStorage.setItem('product', JSON.stringify(items));
    });
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/details/:id" component={ Details } />
            <Route exact path="/cart" render={ () => <ShoppingCart items={ items } /> } />
            <Route exact path="/" render={ () => <Home addItem={ this.addItem } /> } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
