import React from 'react';
import './SearchResult.scoped.scss';

import ResultList from '@/components/SearchResult/ResultList';
import SearchBar from '@/components/SearchResult/SearchBar';


function SearchResult() {
    return (
        <div>

            <ResultList />
            <SearchBar />

        </div>
    );
}

export default SearchResult;