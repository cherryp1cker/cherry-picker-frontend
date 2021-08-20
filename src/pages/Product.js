import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import ProductDetail from '@/pages/product/ProductDetail';
import PageNotFound from '@/pages/common/PageNotFound';

// catalog for specific product
const Product = (props) => {
    const { path } = useRouteMatch();

    return (
        <Switch>
            <Route exact path={`${path}/detail`}>
                <ProductDetail />
            </Route>
            <Route component={PageNotFound} />
        </Switch>
    );
};

export default Product;
