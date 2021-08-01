import React from 'react';
import './TabBarButton.scoped.scss';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const TABBAR_LABEL_PADDING_TOP = 5; // 아이콘과의 간격 (px)

const useStyles = makeStyles({
    label: {
        paddingTop: `${TABBAR_LABEL_PADDING_TOP}px`,
        fontWeight: 700,
        color: '#074EE8',
    },
});

const TabBarButton = (props) => {
    const { label } = useStyles();
    const { label: labelText, component } = props;

    return (
        <BottomNavigationAction
            className="tab-bar-item"
            classes={{
                label,
            }}
            icon={component}
            label={labelText}
            showLabel
        />
    );
};

export default TabBarButton;
