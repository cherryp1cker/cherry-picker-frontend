import React from 'react';
import SearchResultContainer from '@/containers/SearchResultContainer';
import SearchBarContainer from '@/containers/SearchResultContainer';

const SearchResult = (props) => {
    return (
        <>
            <SearchBarContainer />
            <SearchResultContainer />
        </>
    );
};

export default SearchResult;