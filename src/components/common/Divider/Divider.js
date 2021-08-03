import React from 'react';
import './Divider.scoped.scss';

// Material-UI
const Divider = (props) => {
    const { text, textColor } = props;

    return (
        <div className="modal-divider">
            <span style={{ color: textColor }}>{text}</span>
        </div>
    );
};

export default Divider;
