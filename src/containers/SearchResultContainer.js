import React, {useEffect, useState} from 'react';
import queryString from 'query-string';

import ResultList from '@/components/search/ResultList';
import ResultItem from '@/components/search/ResultItem';
import { useSelector } from 'react-redux';
import * as store from '@/redux/modules/store';

const SearchResultContainer = (props) => {

    const [resultItemList, setResultItemList] = useState([]);

    const refresh = useSelector((store) => store.cnt);

    // useEffect(() => {
    //     const resultList = store.getResults();
    //     const resultItemList = [];
    //     for (const searchResult of resultList) {
    //         const resultItem = (<ResultItem key={ searchResult.id } searchResult={ searchResult } />);
    //         resultItemList.push(resultItem);
    //     }
    //
    //     setResultItemList(resultItemList);
    // }, [refresh])

    //

    // console.log(props.keyword);

    //const keyword = query.keyword === '';

    return (
        <>
            <div>{props.keyword}</div>
        </>
    );
}

export default SearchResultContainer;
