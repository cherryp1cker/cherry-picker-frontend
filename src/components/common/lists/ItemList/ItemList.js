import React, { useState, useEffect } from 'react';
import './ItemList.scoped.scss'

import ResultItem from '@/components/search/Item';
import { useSelector } from 'react-redux';
import * as store from '@/redux/modules/store';


const ItemList = (props) => {

    const [resultItemList, setResultItemList] = useState([]);

    const refresh = useSelector((store) => store.cnt);


    useEffect(() => {
        const list = store.getResults();
        const itemList = [];
        for (const item of list) {
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

export default ItemList;