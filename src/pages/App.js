import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import { Home, About, PageNotFound } from '@/pages';
import AppWrapper from '@/components/common/templates/AppWrapper';
import SearchResult from "../components/SearchResult";

// catalog for all routings
const App = (props) => {
    return (
        <AppWrapper>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/search-result" component={ SearchResult } />
                <Route component={PageNotFound} />
            </Switch>
        </AppWrapper>
    );
};

export default hot(module)(App);
