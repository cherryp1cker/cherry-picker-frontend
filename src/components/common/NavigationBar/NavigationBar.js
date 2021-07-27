import React from 'react';
import './NavigationBar.scoped.scss';

import BellIcon from '@/components/common/icons/BellIcon';
import GearIcon from '@/components/common/icons/GearIcon';

// Material-UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


const Page = (props) => {
    return (
        <AppBar
            className="navigation-bar"
            elevation={0}
            position="static"
            color="inherit"
        >
            <Toolbar className="tool-bar">
                <div className="logo-wrapper">
                    <span>Logo</span>
                </div>
                <BellIcon />
                <GearIcon />
            </Toolbar>
        </AppBar>
    );
};

export default Page;
