import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import ProductList from './modules/ProductList/ProductList.container';
import ProductPage from './modules/ProductPage/ProductPage.container';
import AccountPage from './modules/AccountPage/AccountPage.container';
import Faq from './modules/Faq/Faq';
import Terms from './modules/Terms/Terms';
import NotFound from './modules/NotFound/NotFound';

export default(
    <Fragment>
        <Route exact path={'/'} component={ProductList} />
        <Route exact path={'/products/:id'} component={ProductPage} />
        <Route exact path={'/myaccount'} component={AccountPage} />
        <Route exact path={'/faq'} component={Faq} />
        <Route exact path={'/terms'} component={Terms} />
        <Route component={NotFound} />
    </Fragment>
);