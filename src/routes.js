import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group-v2';

import ProductList from './modules/ProductList/ProductList.container';
import ProductPage from './modules/ProductPage/ProductPage.container';
import AccountPage from './modules/AccountPage/AccountPage.container';
import Faq from './modules/Faq/Faq';
import Terms from './modules/Terms/Terms';
import NotFound from './modules/NotFound/NotFound';

const routes = (
    <Route render={({ location }) => {
        const { pathname, key } = location;
        console.log(location)
        return (
          <TransitionGroup>
            <CSSTransition
              key={key}
              timeout={{ enter: 500, exit: 500 }}
              classNames={'routeFade'}
            >
              <Switch key={key} location={location}>
                <Route exact path={'/'} component={ProductList} />
                <Route path={'/products/:id'} component={ProductPage} />
                <Route exact path={'/myaccount'} component={AccountPage} />
                <Route exact path={'/faq'} component={Faq} />
                <Route exact path={'/terms'} component={Terms} />
                <Route component={NotFound} />
              </Switch>
             </CSSTransition>
            </TransitionGroup>
        )
      }}/>      
);

export default routes;