import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';

import ProductList from './modules/ProductList/ProductList';
import ProductPage from './components/ProductPage/ProductPage.component';
import Cart from './components/Cart/Cart.component';
import Faq from './modules/Faq/Faq';
import Terms from './modules/Terms/Terms';
import NotFound from './modules/NotFound/NotFound';

class App extends Component {
  render() {
      return (
          <BrowserRouter>
              <MainLayout>
                  <Switch>
                    <Route exact path={'/'} component={ProductList} />
                    <Route exact path={'/product/:id'} component={ProductPage} />
                    <Route exact path={'/faq'} component={Faq} />
                    <Route exact path={'/terms'} component={Terms} />
                    <Route exact path={'/cart'} component={Cart} />
                    <Route component={NotFound} />
                  </Switch>
              </MainLayout>
          </BrowserRouter>
      )
  }
}

export default App;
