import React from 'react';
import './SeekBar.scoped.scss';

const SeekBar = (props) => {

    return (
        <div className="seek-bar">
            <div id="circle" className="circle" draggable={true}>
                <span className="number">0</span>
            </div>
        </div>
    );
};


export default SeekBar;