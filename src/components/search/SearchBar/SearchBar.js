import React from 'react';
import './SearchBar.scoped.scss';
import {makeStyles} from "@material-ui/core/styles";

function SearchBar() {
    return (
        <div className="InputBox">
            <input
                className="search-bar"
                placeholder="검색"
                type="button"
                >
            </input>
        </div>
    );
}

export default SearchBar;