import React, { useState } from 'react';
import './FullContainer.scoped.scss';

// Material-UI
import ListItem from '@material-ui/core/ListItem';

const FullContainer = (props) => {

    return (
        <div className="template-full-container">
            <ListItem
                disableGutters
            >
                {props.children}
            </ListItem>
        </div>
    );
};

export default FullContainer;
