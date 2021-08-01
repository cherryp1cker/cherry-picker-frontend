import React, { useState, useEffect } from 'react';
import './ItemList.scoped.scss'

import Item from '@/components/common/Item/Item';


const ItemList = (props) => {

    return (
        <div>
            <div className="search-result-list" >
                { props.list }
            </div>
        </div>
    );
};

export default ItemList;