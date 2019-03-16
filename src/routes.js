import React from 'react';
import { Route } from 'react-router-dom';

import ProductList from './modules/ProductList/ProductList';
import ProductPage from './components/ProductPage/ProductPage.component';
import Cart from './components/Cart/Cart.component';
import Faq from './modules/Faq/Faq';
import Terms from './modules/Terms/Terms';
import NotFound from './modules/NotFound/NotFound';

export default(
    <React.Fragment>
        <Route exact path={'/'} component={ProductList} />
        <Route exact path={'/product/:id'} component={ProductPage} />
        <Route exact path={'/faq'} component={Faq} />
        <Route exact path={'/terms'} component={Terms} />
        <Route exact path={'/cart'} component={Cart} />
        <Route path={'*'} component={NotFound} />
    </React.Fragment>
)