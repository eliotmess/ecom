import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import MainLayout from './components/MainLayout';
import ProductList from './components/ProductList/ProductList';
import ProductPage from './components/ProductPage/ProductPageContainer';
import Cart from './components/Cart/Cart.component';
import Faq from './modules/Faq/Faq';
import Terms from './modules/Terms/Terms';
import NotFound from './modules/NotFound/NotFound';

import DevTools from './DevTools';

class App extends Component {

  render() {
      return (
        <Provider store={store}>
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
              <DevTools />
          </BrowserRouter>
        </Provider>
      )
  }
}

export default App;
