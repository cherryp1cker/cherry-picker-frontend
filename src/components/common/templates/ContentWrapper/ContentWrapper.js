import React from 'react';
import './ContentWrapper.scoped.scss';

const ContentWrapper = (props) => {
    return (
        <div className="template-content-wrapper">
            {props.children}
        </div>
    );
};

export default ContentWrapper;
