import React, { useState, useEffect } from 'react';
import './ResultList.scoped.scss'

import ResultItem from '@/components/search/ResultItem';
import { useSelector } from 'react-redux';
import * as store from '@/redux/modules/store';


const ResultList = (props) => {

    const [resultItemList, setResultItemList] = useState([]);

    const refresh = useSelector((store) => store.cnt);


    useEffect(() => {
        const resultList = store.getResults();
        const resultItemList = [];
        for (const searchResult of resultList) {
            const resultItem = (<ResultItem key={ searchResult.id } searchResult={ searchResult } />);
            resultItemList.push(resultItem);
        }

        setResultItemList(resultItemList);
    }, [refresh])


    return (
        <div className="search-result-list" >
            { resultItemList }
        </div>
    );
}

export default ResultList;