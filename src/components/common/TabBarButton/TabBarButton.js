import React from 'react';
import './TabBarButton.scoped.scss';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const TABBAR_BUTTON_BG_SIZE = 65; // 가운데 탭 버튼 크기 (px)
const TABBAR_LABEL_PADDING_TOP = 5; // 아이콘과의 간격 (px)

const useStyles = makeStyles({
    label: {
        paddingTop: `${TABBAR_LABEL_PADDING_TOP}px`,
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
    const { label, wrapper } = useStyles();
    const { label: labelText, component, isCenter } = props;

    return (
        <BottomNavigationAction
            className='tab-bar-item'
            classes={{
                label,
                wrapper: isCenter && wrapper,
            }}
            icon={component}
            label={labelText}
            showLabel
        />
    );
};

export default TabBarButton;
