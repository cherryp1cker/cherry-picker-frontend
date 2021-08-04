import React from 'react';
import SearchResultContainer from '@/containers/search/SearchResultContainer';
import SearchBarContainer from '@/containers/search/SearchBarContainer';
import Page from '@/components/common/templates/Page';
import queryString from 'query-string'

const SearchResult = ({ location }) => {

    const query = queryString.parse(location.search);
    // console.log(query.keyword);

    return (
        <Page>
            <SearchBarContainer top="30px" />
            <SearchResultContainer keyword={query.keyword} />
        </Page>
    );
};

export default SearchResult;
