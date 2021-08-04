import React from 'react';
import './SearchBar.scoped.scss';

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