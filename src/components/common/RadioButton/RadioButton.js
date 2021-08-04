import React from 'react';
import './RadioButton.scoped.scss';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RawRadio from '@material-ui/core/Radio';

const useStyles = ({ labelColor }) => makeStyles({
    root: {
        color: '#C8D8FA',
    },
    checked: {
        color: '#C8D8FA',
    },
    label: {
        color: labelColor,
    },
})();

const RadioButton = (props) => {
    const { value, labelText, labelColor } = props;
    const { root, checked, label } = useStyles({ labelColor });

    const Radio = (
        <RawRadio
            className="radio-button"
            classes={{ root, checked }}
            color="default"
        />
    );

    return (
        <FormControlLabel
            classes={{ label }}
            control={Radio}
            labelPlacement="end"
            value={value}
            label={labelText}
        />
    );
};

export default RadioButton;
