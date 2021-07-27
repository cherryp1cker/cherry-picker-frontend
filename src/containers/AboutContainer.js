import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Page from '@/components/common/templates/Page';

const AboutContainer = (props) => {
    return (
        <Page>
            <h3>About this page</h3>
            <p>This page is a bolierplate for React App. If you want to use it, <i>feel free to try out!</i></p>
            <Link to="/">Go back to home</Link>
        </Page>
    );
};

export default AboutContainer;
