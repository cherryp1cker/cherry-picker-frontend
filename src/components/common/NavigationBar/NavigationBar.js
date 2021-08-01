import React from 'react';
import './NavigationBar.scoped.scss';

// icons
import NavigationBarButton from '@/components/common/NavigationBarButton';
import BackIcon from '@/components/common/icons/BackIcon';
import BellIcon from '@/components/common/icons/BellIcon';
import GearIcon from '@/components/common/icons/GearIcon';

// Material-UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


const Page = (props) => {
    // const { isBackVisible } = props;
    const isBackVisible = true;

    return (
        <AppBar
            className="navigation-bar"
            elevation={0}
            position="static"
            color="inherit"
        >
            <Toolbar className="tool-bar">
                {isBackVisible && <NavigationBarButton component={<BackIcon />} />}
                <div className="logo-wrapper">
                    <span>Logo</span>
                </div>
                <NavigationBarButton component={<BellIcon />} />
                <NavigationBarButton component={<GearIcon />} />
            </Toolbar>
        </AppBar>
    );
};

export default Page;
