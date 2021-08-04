import React from 'react';
import './SearchBar.scoped.scss';

function SearchBar(props) {
    const { top, position } = props;

    const selectedStyle = {
        top: position === 'absolute' ? top : undefined,
        marginTop: position !== 'absolute' ? top : undefined,
    }

    return (
        <div
            className="search-bar-box"
            style={{ position, ...selectedStyle }}
        >
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
