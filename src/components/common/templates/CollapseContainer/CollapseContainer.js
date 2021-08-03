import React, { useState } from 'react';
import './CollapseContainer.scoped.scss';

// Material-UI
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';

const CollapseContainer = (props) => {
    const { headerText } = props;

    const [isOpen, toggle] = useState(false);
    const toggleCollapse = () => {
        toggle(!isOpen);
    };

    return (
        <div className="template-collapse-container">
            <ListItem
                className="collapse-header"
                disableGutters
                button
                onClick={toggleCollapse}
            >
                <span>{headerText}</span>
                <div
                    className={`${(isOpen ? '--close' : '--open')}`}
                />
            </ListItem>
            <Collapse in={isOpen} timeout="auto" unmountOnExit>
                <ListItem
                    className="collapse-inner-content-wrapper"
                    disableGutters
                >
                    {props.children}
                </ListItem>
            </Collapse>
        </div>
    );
};

export default CollapseContainer;
