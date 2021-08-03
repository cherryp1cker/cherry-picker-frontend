import React from 'react';
import './RadioButton.scoped.scss';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RawRadio from '@material-ui/core/Radio';

const useStyles = makeStyles({
    colorPrimary: {
        color: '#C8D8FA',
    },
});

const RadioButton = (props) => {
    const { value, label } = props;
    const { colorPrimary } = useStyles();

    const Radio = (
        <RawRadio
            className="radio-button"
            classes={{ colorPrimary }}
            color="primary"
        />
    );

    return (
        <FormControlLabel
            control={Radio}
            labelPlacement="end"
            value={value}
            label={label}
        />
    );
};

export default RadioButton;
