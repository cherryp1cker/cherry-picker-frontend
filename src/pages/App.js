import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import { Home, About, PageNotFound } from '@/pages';
import AppWrapper from '@/components/common/templates/AppWrapper';

// catalog for all routings
const App = (props) => {
    return (
        <AppWrapper>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route component={PageNotFound} />
            </Switch>
        </AppWrapper>
    );
};

export default hot(module)(App);
