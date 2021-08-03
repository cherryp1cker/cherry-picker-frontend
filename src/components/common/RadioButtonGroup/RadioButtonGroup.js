import React, { useState } from 'react';
import './RadioButtonGroup.scoped.scss';

// Material-UI
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';

const RadioButtonGroup = (props) => {
    const { onClickButton, defaultValue } = props;

    return (
        <FormControl
            fullWidth
        >
            <RadioGroup
                className="template-radio-button-group"
                row
                onChange={(e) => { onClickButton(e); }}
                defaultValue={defaultValue}
            >
                {props.children}
            </RadioGroup>
        </FormControl>
    );
};

export default RadioButtonGroup;
