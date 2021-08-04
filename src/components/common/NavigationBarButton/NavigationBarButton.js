import React from 'react';
import './NavigationBarButton.scoped.scss';

// Material-UI
import IconButton from '@material-ui/core/IconButton';

export default function NavigationBarButton(props) {
    return (
        <IconButton className="navigation-bar-button">
            {props.component}
        </IconButton>
    );
};
