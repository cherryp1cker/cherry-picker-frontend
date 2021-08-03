import React, {useEffect, useState} from 'react';

import ItemList from '@/components/common/lists/ItemList';
import Item from '@/components/common/Item';
import { useSelector } from 'react-redux';

const SearchResultContainer = (props) => {

    const [resultItemList, setResultItemList] = useState([]);
    const refresh = useSelector((state) => state.reducer.cnt);
    const list = useSelector((state) => state.reducer.data);


    useEffect(() => {
        const searchItemList = [];
        for (const searchItem of list) {
            const item = (<Item key={ searchItem.id } item={ searchItem } />);
            searchItemList.push(item);
        }

        setResultItemList(searchItemList);
    }, [refresh])

    return (
        <div>
            <ItemList list={ resultItemList } />
        </div>
    );
}

export default SearchResultContainer;
