import React from 'react';
import './ItemList.scoped.scss'


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