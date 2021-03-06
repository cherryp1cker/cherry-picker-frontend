import React from 'react';
import './Item.scoped.scss';

import { FaRegHeart } from "react-icons/fa"; // 빈 하트
import { FaHeart } from "react-icons/fa"; // 찬 하트
import { useDispatch } from 'react-redux';
import { actions } from '@/redux/modules/search';
import { Button } from "@material-ui/core";
import { FaSquareFull } from "react-icons/fa"; // 찬 네모


const Item = ({ item }) => {
    const { id, name, price, info, jjim } = item;
    const dispatch = useDispatch();
    return (
        <div className="total-item-box">
            <FaSquareFull size="90px" color="D2DFFB"/>
            <div className="updown"></div>
            <div className="item-box">
                <div className="store-name">{name}</div>
                <div className="price-info">
                    <span className="price">{price}</span>
                    <span>원 / </span>
                    <span className="information">{info}</span>
                </div>
                <Button className="jjims" onClick={() => dispatch(actions.clickJjim(id, jjim))}>
                    { jjim ? (
                        <FaHeart size = "20px"/>
                    ) : (
                        <FaRegHeart size = "20px" />
                    )}
                </Button>
            </div>
        </div>
    );
};

export default Item;