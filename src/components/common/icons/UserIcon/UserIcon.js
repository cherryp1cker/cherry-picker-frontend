import React from 'react';
import './UserIcon.scoped.scss';

import SvgIcon from "@material-ui/core/SvgIcon";

export default function UserIcon(props) {
    return (
        <SvgIcon
            className="user-icon"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M20.3658 21.4568V19.4608C20.3658 18.402 19.9452 17.3866 19.1965 16.6379C18.4479 15.8892 17.4324 15.4686 16.3737 15.4686H8.38936C7.33058 15.4686 6.31516 15.8892 5.56649 16.6379C4.81782 17.3866 4.39722 18.402 4.39722 19.4608V21.4568"
                stroke="#074EE8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12.3816 11.4765C14.5864 11.4765 16.3737 9.68914 16.3737 7.48433C16.3737 5.27953 14.5864 3.49219 12.3816 3.49219C10.1767 3.49219 8.3894 5.27953 8.3894 7.48433C8.3894 9.68914 10.1767 11.4765 12.3816 11.4765Z" 
                stroke="#074EE8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </SvgIcon>
    );
};
