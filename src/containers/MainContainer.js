import React, { useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import { Link } from 'react-router-dom';

import SimpleCounter from '@/components/SimpleCounter';
import Page from '@/components/common/templates/Page';

import * as appActions from '@/redux/modules/app';

const createSelectCounterValue = () => (
    createSelector(
        (state) => (state.app),
        (app) => (app.value),
    )
);

const MainContainer = (props) => {
    const dispatch = useDispatch();
    const selectCounterValue = useMemo(createSelectCounterValue, []);
    const counterValue = useSelector((state) => selectCounterValue(state));
    const increment = (value) => (
        useCallback(() => dispatch(appActions.increment(value)))
    );
    const decrement = (value) => (
        useCallback(() => dispatch(appActions.decrement(value)))
    );

    return (
        <Page>
            <img
                src="assets/images/pengsu-sleep.jpg"
                width="350px"
                height="350px"
            />
            <br />
            <SimpleCounter
                increment={increment(1)}
                decrement={decrement(1)}
                value={counterValue}
            />
            <br />
            <Link to="/about">Want to know about this page?</Link>
        </Page>
    );
}

export default MainContainer;
