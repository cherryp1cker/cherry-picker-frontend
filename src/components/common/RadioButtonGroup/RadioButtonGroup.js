import React, { useState } from 'react';
import './RadioButtonGroup.scoped.scss';

// Material-UI
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';

const RadioButtonGroup = (props) => {
    const { onClickButton } = props;

    return (
        <div className="template-collapse-container">
            <FormControl>
                <RadioGroup
                    row
                    onChange={(e) => { onClickButton(e); }}
                >
                    {props.children}
                </RadioGroup>
            </FormControl>
        </div>
    );
};

export default RadioButtonGroup;
