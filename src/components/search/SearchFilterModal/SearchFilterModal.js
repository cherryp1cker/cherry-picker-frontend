import React from 'react';
import './SearchFilterModal.scoped.scss';

// Material-UI
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';

// Other Components
import Modal from '@/components/common/templates/Modal';
import FullContainer from '@/components/common/templates/FullContainer';
import CollapseContainer from '@/components/common/templates/CollapseContainer';
import RadioButtonGroup from '@/components/common/RadioButtonGroup';
import RadioButton from '@/components/common/RadioButton';

const MENU_TYPE = ['양식', '한식', '일식', '중식', '퓨전', '기타'];

const Page = (props) => {
    const { isOpen } = props;
    const onClickButton = (e) => console.log(e.target.value);

    return (
        <Modal
            className="search-filter-modal"
            isOpen={isOpen}
        >
            <MuiDialogContent>
                <RadioButtonGroup
                    onClickButton={onClickButton}
                >
                    <RadioButton
                        value="location"
                        label="위치로 찾기"
                    />
                    <RadioButton
                        value="info"
                        label="정보로 찾기"
                    />
                </RadioButtonGroup>
                <div className="filter-modal-divider">
                    <span>FILTER</span>
                </div>
                <FullContainer>
                    {MENU_TYPE.map((type, index) => (
                        <button key={index}>{type}</button>
                    ))}
                </FullContainer>
                <CollapseContainer
                    headerText="음식 종류"
                >
                    {MENU_TYPE.map((type, index) => (
                        <button key={index}>{type}</button>
                    ))}
                </CollapseContainer>
            </MuiDialogContent>
        </Modal>
    );
};

export default Page;
