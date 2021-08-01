import React from 'react';
import './TabBar.scoped.scss';

// Other components
import TabBarButton from '@/components/common/TabBarButton';

// Material-UI
import BottomNavigation from '@material-ui/core/BottomNavigation';

const LABELS = [
    '홈', '검색', '판매하기', '찜', '프로필'
];

const TabBar = (props) => {
    return (
        <BottomNavigation
            className="tab-bar"
            value={0}
            onChange={() => {}}
        >{
            LABELS.map((label, index) => (
                <TabBarButton
                    key={index}
                    label={label}
                />
            ))
        }</BottomNavigation>
    );
};

export default TabBar;
