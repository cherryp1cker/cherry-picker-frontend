import React from 'react';
import './TabBarButton.scoped.scss';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const TABBAR_BUTTON_BG_SIZE = 65; // 가운데 탭 버튼 크기 (px)

const useStyles = makeStyles({
    root: {
        paddingTop: '6px',
    },
    label: {
        paddingTop: '4px', // 아이콘과의 간격 (px)
        fontWeight: 700,
        color: '#074EE8',
    },
    wrapper: {
        width: `${TABBAR_BUTTON_BG_SIZE}px`,
        height: `${TABBAR_BUTTON_BG_SIZE}px`,
        borderRadius: '50%',
        backgroundColor: '#C8D8FA',
    },
});

const TabBarButton = (props) => {
    const { root, label, wrapper } = useStyles();
    const { value, label: labelText, icon, isCenter } = props;

    return (
        <BottomNavigationAction
            className={`tab-bar-item ${value === 0 ? '--selected' : ''}`}
            classes={{
                root,
                label,
                wrapper: isCenter && wrapper,
            }}
            icon={icon}
            label={labelText}
            showLabel
        />
    );
};

export default TabBarButton;
