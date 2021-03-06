import React, { useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';

import Page from '@/components/common/templates/Page';
import NaverMap from '@/components/NaverMap';

// containers
import SearchBarContainer from '@/containers/search/SearchBarContainer';
import SearchFilterModalContainer from '@/containers/search/SearchFilterModalContainer';

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
            <SearchFilterModalContainer isOpen={true} />
            <SearchBarContainer position="absolute" top="110px" />
        </Page>
    );
}

export default MainContainer;
