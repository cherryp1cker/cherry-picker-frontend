import React from 'react';
import './ResultItem.scoped.scss';

import { FaRegHeart } from "react-icons/fa"; // 빈 하트
import { FaHeart } from "react-icons/fa"; // 찬 하트


function ResultItem({ searchResult }) {
    return (
        <div>
            <div className="store-name">{ searchResult.name }</div>
            <div className="price">{ searchResult.price }</div>
            <div className="information">{ searchResult.info }</div>
            <FaRegHeart />
        </div>
    );
}

export default ResultItem;