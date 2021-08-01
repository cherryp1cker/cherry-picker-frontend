import React from 'react';
import './SearchIcon.scoped.scss';

import SvgIcon from "@material-ui/core/SvgIcon";
import IconButton from '@material-ui/core/IconButton';

export default function SearchIcon(props) {
    return (
        <SvgIcon
            className="search-icon"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10.9789 18.9627C15.3885 18.9627 18.9632 15.388 18.9632 10.9784C18.9632 6.56883 15.3885 2.99414 10.9789 2.99414C6.56932 2.99414 2.99463 6.56883 2.99463 10.9784C2.99463 15.388 6.56932 18.9627 10.9789 18.9627Z" 
                stroke="#074EE8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M20.9591 20.9586L16.6177 16.6172"
                stroke="#074EE8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </SvgIcon>
    );
};
