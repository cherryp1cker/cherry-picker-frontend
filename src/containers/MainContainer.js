import React, { useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';

import NaverMap from '@/components/NaverMap';
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
            <NaverMap />
        </Page>
    );
}

export default MainContainer;
