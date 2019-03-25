import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ProductList from './modules/ProductList/ProductList.container';
import ProductPage from './modules/ProductPage/ProductPage.container';
import Cart from './modules/Cart/Cart';
import Faq from './modules/Faq/Faq';
import Terms from './modules/Terms/Terms';
import NotFound from './modules/NotFound/NotFound';

export default(
    <Switch>
        <Route exact path={'/'} component={ProductList} />
        <Route exact path={'/product/:id'} component={ProductPage} />
        <Route exact path={'/faq'} component={Faq} />
        <Route exact path={'/terms'} component={Terms} />
        <Route exact path={'/cart'} component={Cart} />
        <Route component={NotFound} />
    </Switch>
);