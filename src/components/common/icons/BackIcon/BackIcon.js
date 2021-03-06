import React from 'react';
import './BackIcon.scoped.scss';

import SvgIcon from "@material-ui/core/SvgIcon";

export default function BackIcon(props) {
    return (
        <SvgIcon
            className="back-icon"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M27 16H5"
                stroke="#C8D8FA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M14 7L5 16L14 25"
                stroke="#C8D8FA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </SvgIcon>
    );
};
