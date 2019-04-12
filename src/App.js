import React, { Component, Fragment } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, Transition, CSSTransition } from "react-transition-group";
// import routes from './routes';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';

import MainLayout from './modules/MainLayout';
import ProductList from './modules/ProductList/ProductList.container';
import ProductPage from './modules/ProductPage/ProductPage.container';
import AccountPage from './modules/AccountPage/AccountPage.container';
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
                <Route render={({ location }) => {
                  const { pathname, key } = location;
                  return (
                    <TransitionGroup>
                      <CSSTransition
                        // key={key}
                        // timeout={{ enter: 300, exit: 300 }}
                        // classNames={'routeFade'}
                        // transitionName="routeFade"
                        // transitionAppear={true}
                        // transitionAppearTimeout={5000}
                        // transitionEnter={true}
                        // transitionEnterTimeout={5000}
                        // transitionLeave={true}
                        // transitionLeaveTimeout={5000}
                      >
                        <Switch key={key} location={location}>
                          <Route exact path={'/'} component={ProductList} />
                          <Route exact path={'/products/:id'} component={ProductPage} />
                          <Route exact path={'/myaccount'} component={AccountPage} />
                          <Route exact path={'/faq'} component={Faq} />
                          <Route exact path={'/terms'} component={Terms} />
                          <Route component={NotFound} />
                        </Switch>
                       </CSSTransition>
                      </TransitionGroup>
                  )
                }}/>      
              </MainLayout>
              {/* <DevTools /> */}
          </BrowserRouter>
        </Provider>
      )
  }
}

export default App;