import React from 'react';
import './Button.scoped.scss';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import BaseButton from '@material-ui/core/Button';

const useStyles = ({ buttonColor, textColor }) => makeStyles({
    root: {
        color: textColor,
        backgroundColor: buttonColor,
        margin: '0 3px',
        borderRadius: '7px',
    },
})();

const Button = (props) => {
    const { buttonColor, textColor, onClick } = props;
    const {
        root
    } = useStyles({ buttonColor, textColor });

    return (
        <BaseButton
            classes={{ root }}
            onClick={(e) => onClick(e)}
            color="default"
            fullWidth
        >
            {props.children}
        </BaseButton>
    );
};

export default Button;
