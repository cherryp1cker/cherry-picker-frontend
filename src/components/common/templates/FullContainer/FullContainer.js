import React, { useState } from 'react';
import './FullContainer.scoped.scss';

// Material-UI

const FullContainer = (props) => {

    return (
        <div className="template-full-container">
            {props.children}
        </div>
    );
};

export default FullContainer;
