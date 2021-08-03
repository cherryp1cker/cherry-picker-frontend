import React from 'react';
import './SearchFilterModal.scoped.scss';

// Material-UI
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';

import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

import Modal from '@/components/common/templates/Modal';

const Page = (props) => {
    const { isOpen } = props;

    return (
        <Modal
            className="search-filter-modal"
            isOpen={isOpen}
        >
            <MuiDialogContent>
                <FormControl component="fieldset">
                    <RadioGroup row onChange={(e) => { console.log(e.target.value); }}>
                        <FormControlLabel
                            value="location"
                            control={<Radio />}
                            label="위치로 찾기"
                            labelPlacement="end"
                        />
                        <FormControlLabel
                            value="info"
                            control={<Radio />}
                            label="정보로 찾기"
                            labelPlacement="end"
                        />
                    </RadioGroup>
                </FormControl>
            </MuiDialogContent>
        </Modal>
    );
};

export default Page;
