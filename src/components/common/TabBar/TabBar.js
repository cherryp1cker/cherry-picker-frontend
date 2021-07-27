import React from 'react';
import './TabBar.scoped.scss';

// Material-UI
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const LABELS = [
    '홈', '검색', '판매하기', '찜', '프로필'
];

const TabBar = (props) => {
    return (
        <BottomNavigation
            className="tab-bar"
            value={0}
            showLabels
            onChange={() => {}}
        >{
            LABELS.map((label) => (
                <BottomNavigationAction
                    className="tab-bar-item"
                    label={label}
                />
            ))
        }</BottomNavigation>
    );
};

export default TabBar;
