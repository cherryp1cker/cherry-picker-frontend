import React from 'react';
import './Modal.scoped.scss';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';

// const LG_WIDTH = 1280 // 'lg' 크기의 실제 가로 길이 (px)
const INNER_CONTENT_PADDING = 20; // 컨텐츠 영역 내 요소의 좌우 패딩 (px)

const useStyles = ({ top }) => makeStyles({
    paper: {
        margin: 0,
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        top,
    },
    paperFullWidth: {
        width: `calc(100% - ${INNER_CONTENT_PADDING * 2}px)`
    },
    // paperWidthLg: {
    //     maxWidth: `${LG_WIDTH - (INNER_CONTENT_PADDING * 2)}px`
    // }
})();

const Modal = (props) => {
    const { isOpen, top } = props;
    const {
        paper,
        paperFullWidth,
    } = useStyles({ top });

    return (
        <Dialog
            className="template-modal"
            classes={{
                paper,
                paperFullWidth,
                // paperWidthLg,
            }}
            maxWidth="sm"
            open={isOpen}
            fullWidth
            hideBackdrop
            disableEnforceFocus
        >
            {props.children}
        </Dialog>
    );
};

export default Modal;
