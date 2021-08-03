import React, { useState } from 'react';
import './CollapseContainer.scoped.scss';

// Material-UI
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';

const CollapseContainer = (props) => {
    const [isOpen, toggle] = useState(false);
    const toggleCollapse = () => {
        toggle(!isOpen);
    };

    return (
        <div className="template-collapse-container">
            <ListItem button onClick={toggleCollapse}>
                {isOpen ? <span>닫기</span> : <span>열기</span>}
            </ListItem>
            <Collapse in={isOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button>
                        {props.children}
                    </ListItem>
                </List>
            </Collapse>
        </div>
    );
};

export default CollapseContainer;
