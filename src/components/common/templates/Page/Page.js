import React from 'react';
import './Page.scoped.scss';

import NavigationBar from '@/components/common/NavigationBar';
import TabBar from '@/components/common/TabBar';
import ContentWrapper from '@/components/common/templates/ContentWrapper';

// Material-UI
import Paper from '@material-ui/core/Paper';

const Page = (props) => {
    return (
        <Paper
            className="template-page"
            elevation={0}
            square
        >
            <NavigationBar />
            <ContentWrapper>
                {props.children}
            </ContentWrapper>
            <TabBar />
        </Paper>
    );
};

export default Page;
