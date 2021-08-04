import React from 'react';

import SearchBar from '@/components/search/SearchBar';

const SearchBarContainer = (props) => {
    const { position, top } = props;

    return (
        <SearchBar
            position={position}
            top={top}
        />
    );
}

export default SearchBarContainer;
