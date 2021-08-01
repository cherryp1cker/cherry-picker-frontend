import React from 'react';
import './BellIcon.scoped.scss';

import SvgIcon from "@material-ui/core/SvgIcon";
import IconButton from '@material-ui/core/IconButton';

export default function BellIcon(props) {
    return (
        <IconButton className="bell-icon">
            <SvgIcon
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M7.02547 13C7.02381 11.814 7.25691 10.6394 7.71132 9.54395C8.16573 8.44847 8.83248 7.45376 9.67311 6.61716C10.5138 5.78056 11.5117 5.11861 12.6093 4.66948C13.707 4.22034 14.8827 3.9929 16.0686 4.00026C21.0173 4.03705 24.9757 8.15043 24.9757 13.113V14C24.9757 18.477 25.9124 21.0749 26.7373 22.4948C26.8262 22.6465 26.8735 22.819 26.8744 22.9948C26.8754 23.1706 26.8299 23.3436 26.7427 23.4963C26.6554 23.6489 26.5295 23.7759 26.3775 23.8643C26.2256 23.9528 26.053 23.9996 25.8771 24H6.12304C5.9472 23.9996 5.77458 23.9527 5.6226 23.8643C5.47062 23.7758 5.34466 23.6488 5.25743 23.4961C5.1702 23.3435 5.12478 23.1705 5.12575 22.9946C5.12672 22.8188 5.17405 22.6463 5.26296 22.4946C6.08837 21.0746 7.02546 18.4767 7.02546 14L7.02547 13Z"
                    stroke="#C8D8FA"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M12 24V25C12 26.0609 12.4214 27.0783 13.1716 27.8284C13.9217 28.5786 14.9391 29 16 29C17.0609 29 18.0783 28.5786 18.8284 27.8284C19.5786 27.0783 20 26.0609 20 25V24"
                    stroke="#C8D8FA"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </SvgIcon>
        </IconButton>
    );
};
