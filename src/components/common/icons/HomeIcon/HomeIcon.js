import React from 'react';
import './HomeIcon.scoped.scss';

import SvgIcon from "@material-ui/core/SvgIcon";

export default function HomeIcon(props) {
    return (
        <SvgIcon
            className="home-icon"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2.99414 9.96465L11.9765 2.97839L20.9588 9.96465V20.9431C20.9588 21.4724 20.7485 21.9802 20.3742 22.3545C19.9998 22.7288 19.4921 22.9391 18.9627 22.9391H4.99021C4.46082 22.9391 3.95311 22.7288 3.57878 22.3545C3.20444 21.9802 2.99414 21.4724 2.99414 20.9431V9.96465Z"
                stroke="#074EE8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8.9823 22.9391V12.9587H14.9705V22.9391" 
                stroke="#074EE8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </SvgIcon>
    );
};
