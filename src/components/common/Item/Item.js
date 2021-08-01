import React from 'react';
import './Item.scoped.scss';

import { FaRegHeart } from "react-icons/fa"; // 빈 하트
import { FaHeart } from "react-icons/fa"; // 찬 하트
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '@/redux/modules/store';
import { Button } from "@material-ui/core";

const Item = ({ item }) => {
    const { id, name, price, info, jjim } = item;
    const dispatch = useDispatch();
    return (
        <div>
            <div className="store-name">{name}</div>
            <span className="price">{price}</span>
            <span>원 / </span>
            <span className="information">{info}</span>
            <div></div>
            <Button onClick={() => dispatch(actions.clickJjim(id))}>
                { jjim ? (
                    <FaRegHeart />
                ) : (
                    <FaHeart />
                )}
            </Button>
        </div>
    );
};

export default Item;