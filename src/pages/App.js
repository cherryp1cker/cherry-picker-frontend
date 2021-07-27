import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import { Home, About, PageNotFound } from '@/pages';
import Wrapper from '@/components/common/templates/Wrapper';

// catalog for all routings
const App = (props) => {
    return (
        <Wrapper>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route component={PageNotFound} />
            </Switch>
        </Wrapper>
    );
};

export default hot(module)(App);
