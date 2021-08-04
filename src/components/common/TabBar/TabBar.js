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
        icon: <HomeIcon />,
    },
    {
        label: '검색',
        icon: <SearchIcon />,
    },
    {
        label: '판매하기',
        icon: <BarcodeIcon />,
    },
    {
        label: '찜',
        icon: <HeartIcon />,
    },
    {
        label: '프로필',
        icon: <UserIcon />,
    },
];

const TabBar = (props) => {
    return (
        <BottomNavigation
            className="tab-bar"
            value={1}
            onChange={() => {}}
        >{
            BUTTONS.map((button, index) => (
                <TabBarButton
                    key={index}
                    value={index}
                    label={button.label}
                    icon={button.icon}
                    isCenter={index === 2}
                />
            ))
        }</BottomNavigation>
    );
};

export default TabBar;
