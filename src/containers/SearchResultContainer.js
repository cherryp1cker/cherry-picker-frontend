import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import ResultList from '@/components/SearchResult/ResultList';
import SearchBar from '@/components/SearchResult/SearchBar';
import Page from '@/components/common/templates/Page';

const SearchResultContainer = (props) => {
    return (
        <Page>

            <SearchBar />
            <ResultList />

        </Page>
    );
};

export default SearchResultContainer;
