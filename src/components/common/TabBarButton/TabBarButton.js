import React from 'react';
import './TabBarButton.scoped.scss';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const TABBAR_BUTTON_BG_SIZE = 65; // 가운데 탭 버튼 크기 (px)

const useStyles = makeStyles({
    label: {
        paddingTop: '4px', // 아이콘과의 간격 (px)
        fontWeight: 700,
        color: '#074EE8',
    },
});

const TabBarButton = (props) => {
    const { label, wrapper } = useStyles();
    const { value, label: labelText, icon, isCenter } = props;
    const selected = 1;

    return (
        <BottomNavigationAction
            className={`tab-bar-item ${value === selected ? '--selected' : ''} ${isCenter ? '--center' : ''}`}
            classes={{
                label,
                // wrapper: isCenter && wrapper,
            }}
            icon={icon}
            label={labelText}
            showLabel
        />
    );
};

export default TabBarButton;
