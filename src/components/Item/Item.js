import React from 'react';
import './Item.scoped.scss';

import { FaRegHeart } from "react-icons/fa"; // 빈 하트
import { FaHeart } from "react-icons/fa"; // 찬 하트


const Item = ({ searchResult }) => {
    return (
        <div>
            <div className="store-name">{searchResult.name}</div>
            <span className="price">{searchResult.price}</span>
            <span>원 / </span>
            <span className="information">{searchResult.info}</span>
            <FaRegHeart/>
        </div>
    );
};

export default Item;