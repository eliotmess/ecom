import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import MainLayout from './modules/MainLayout';
import routes from './routes';

import DevTools from './DevTools';

class App extends Component {

  render() {
      return (
        <Provider store={store}>
          <BrowserRouter>
              <MainLayout>
                {routes}
              </MainLayout>
              <DevTools />
          </BrowserRouter>
        </Provider>
      )
  }
}

export default App;
