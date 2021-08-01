import React from 'react';
import './SearchFilterModal.scoped.scss';

// Material-UI
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';

import Modal from '@/components/common/templates/Modal';

const Page = (props) => {
    return (
        <Modal
            className="search-filter-modal"
            isOpen={true}
        >
            <MuiDialogContent>
                하하하
            </MuiDialogContent>
        </Modal>
    );
};

export default Page;