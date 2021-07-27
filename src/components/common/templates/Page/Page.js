import React from 'react';
import './Page.scoped.scss';

import NavigationBar from '@/components/common/NavigationBar';
import TabBar from '@/components/common/TabBar';

// Material-UI
import { Paper } from '@material-ui/core';

const Page = (props) => {
    return (
        <Paper
            className="template-page"
            elevation={0}
            square
        >
            <NavigationBar />
            <div className="content-container">
                {props.children}
            </div>
            <TabBar />
        </Paper>
    );
};

export default Page;
