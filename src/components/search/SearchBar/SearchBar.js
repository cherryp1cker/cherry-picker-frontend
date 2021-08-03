import React from 'react';
import './SearchBar.scoped.scss';
import {makeStyles} from "@material-ui/core/styles";

function SearchBar() {
    return (
        <div className="search-bar-box">
            <input
                className="search-bar"
                value="검색"
                type="button"
                >
            </input>
        </div>
    );
}

export default SearchBar;