import React from 'react';
import './RadioButton.scoped.scss';

// Material-UI
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

const RadioButton = (props) => {
    const { value, label } = props;

    return (
        <FormControlLabel
            control={<Radio className="radio-button" />}
            labelPlacement="end"
            value={value}
            label={label}
        />
    );
};

export default RadioButton;
