import React from 'react';
import './TabBar.scoped.scss';

// Other components
import TabBarButton from '@/components/common/TabBarButton';
import HomeIcon from '@/components/common/icons/HomeIcon';
import SearchIcon from '@/components/common/icons/SearchIcon';
import BarcodeIcon from '@/components/common/icons/BarcodeIcon';
import HeartIcon from '@/components/common/icons/HeartIcon';
import UserIcon from '@/components/common/icons/UserIcon';

// Material-UI
import BottomNavigation from '@material-ui/core/BottomNavigation';

const BUTTONS = [
    {
        label: '홈',
        component: <HomeIcon />,
    },
    {
        label: '검색',
        component: <SearchIcon />,
    },
    {
        label: '판매하기',
        component: <BarcodeIcon />,
    },
    {
        label: '찜',
        component: <HeartIcon />,
    },
    {
        label: '프로필',
        component: <UserIcon />,
    },
];

const TabBar = (props) => {
    return (
        <BottomNavigation
            className="tab-bar"
            value={0}
            onChange={() => {}}
        >{
            BUTTONS.map((button, index) => (
                <TabBarButton
                    key={index}
                    label={button.label}
                    component={button.component}
                />
            ))
        }</BottomNavigation>
    );
};

export default TabBar;
