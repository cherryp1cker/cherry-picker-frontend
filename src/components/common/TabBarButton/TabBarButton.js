import React from 'react';
import './TabBarButton.scoped.scss';

// Material-UI
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const TabBarButton = (props) => {
    const { label, component } = props;

    return (
        <BottomNavigationAction
            className="tab-bar-item"
            icon={component}
            label={label}
            showLabel
        />
    );
};

export default TabBarButton;
